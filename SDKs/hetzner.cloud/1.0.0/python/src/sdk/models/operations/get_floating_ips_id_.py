from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetFloatingIpsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation:
    r"""GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation
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
class GetFloatingIpsID200ApplicationJSONFloatingIPProtection:
    r"""GetFloatingIpsID200ApplicationJSONFloatingIPProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIP:
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: List[GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetFloatingIpsID200ApplicationJSONFloatingIPProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetFloatingIpsID200ApplicationJSON:
    floating_ip: GetFloatingIpsID200ApplicationJSONFloatingIP = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    

@dataclass
class GetFloatingIpsIDRequest:
    path_params: GetFloatingIpsIDPathParams = field()
    

@dataclass
class GetFloatingIpsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_floating_ips_id_200_application_json_object: Optional[GetFloatingIpsID200ApplicationJSON] = field(default=None)
    
