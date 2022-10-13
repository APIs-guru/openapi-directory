from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetFloatingIpsRequest:
    query_params: GetFloatingIpsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr:
    dns_ptr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation:
    city: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    
class GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONFloatingIps:
    blocked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dns_ptr: List[GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_ptr' }})
    home_location: GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_location' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: GetFloatingIps200ApplicationJSONFloatingIpsProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    server: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSONMeta:
    pagination: GetFloatingIps200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetFloatingIps200ApplicationJSON:
    floating_ips: List[GetFloatingIps200ApplicationJSONFloatingIps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    meta: Optional[GetFloatingIps200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetFloatingIpsResponse:
    content_type: str = field(default=None)
    get_floating_ips_200_application_json_object: Optional[GetFloatingIps200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
