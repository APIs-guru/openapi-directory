from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetNetworksIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworksIDRequest:
    path_params: GetNetworksIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    
class GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetwork:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    labels: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: GetNetworksID200ApplicationJSONNetworkProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    routes: List[GetNetworksID200ApplicationJSONNetworkRoutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    subnets: List[GetNetworksID200ApplicationJSONNetworkSubnets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSON:
    network: Optional[GetNetworksID200ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass
class GetNetworksIDResponse:
    content_type: str = field(default=None)
    get_networks_id_200_application_json_object: Optional[GetNetworksID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
