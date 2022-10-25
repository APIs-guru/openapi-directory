from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutNetworksIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutNetworksIDUpdateNetworkRequestLabels:
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelkey' }})
    

@dataclass_json
@dataclass
class PutNetworksIDUpdateNetworkRequest:
    labels: Optional[PutNetworksIDUpdateNetworkRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutNetworksIDRequest:
    path_params: PutNetworksIDPathParams = field(default=None)
    request: Optional[PutNetworksIDUpdateNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    
class PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetwork:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    labels: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: PutNetworksID200ApplicationJSONNetworkProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    routes: List[PutNetworksID200ApplicationJSONNetworkRoutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    subnets: List[PutNetworksID200ApplicationJSONNetworkSubnets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSON:
    network: Optional[PutNetworksID200ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass
class PutNetworksIDResponse:
    content_type: str = field(default=None)
    put_networks_id_200_application_json_object: Optional[PutNetworksID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
