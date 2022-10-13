from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetNetworksQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworksRequest:
    query_params: GetNetworksQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONMeta:
    pagination: GetNetworks200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksRoutes:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    
class GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksSubnets:
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworks:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    labels: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: GetNetworks200ApplicationJSONNetworksProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    routes: List[GetNetworks200ApplicationJSONNetworksRoutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    subnets: List[GetNetworks200ApplicationJSONNetworksSubnets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSON:
    meta: Optional[GetNetworks200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    networks: List[GetNetworks200ApplicationJSONNetworks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    

@dataclass
class GetNetworksResponse:
    content_type: str = field(default=None)
    get_networks_200_application_json_object: Optional[GetNetworks200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
