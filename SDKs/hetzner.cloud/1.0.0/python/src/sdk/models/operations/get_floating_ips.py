from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetFloatingIpsSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"


@dataclass
class GetFloatingIpsQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetFloatingIpsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation:
    r"""GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation
    Location the Floating IP was created in. Routing is optimized for this Location.
    """
    
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsProtection:
    r"""GetFloatingIps200ApplicationJSONFloatingIpsProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIps:
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: List[GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetFloatingIps200ApplicationJSONFloatingIpsProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONMeta:
    pagination: GetFloatingIps200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSON:
    floating_ips: List[GetFloatingIps200ApplicationJSONFloatingIps] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    meta: Optional[GetFloatingIps200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetFloatingIpsRequest:
    query_params: GetFloatingIpsQueryParams = field()
    

@dataclass
class GetFloatingIpsResponse:
    content_type: str = field()
    status_code: int = field()
    get_floating_ips_200_application_json_object: Optional[GetFloatingIps200ApplicationJSON] = field(default=None)
    
