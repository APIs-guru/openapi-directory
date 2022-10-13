from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostNetworksRequestBodyLabels:
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelkey' }})
    

@dataclass_json
@dataclass
class PostNetworksRequestBodyRoutes:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    
class PostNetworksRequestBodySubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworksRequestBodySubnets:
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: PostNetworksRequestBodySubnetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostNetworksRequestBodyCreateNetworkRequest:
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    labels: Optional[PostNetworksRequestBodyLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    routes: Optional[List[PostNetworksRequestBodyRoutes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    subnets: Optional[List[PostNetworksRequestBodySubnets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass
class PostNetworksRequest:
    request: Optional[PostNetworksRequestBodyCreateNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkProtection:
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkRoutes:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    
class PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkSubnets:
    gateway: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    network_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_zone' }})
    type: PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetwork:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_range' }})
    labels: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection: PostNetworks201ApplicationJSONNetworkProtection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection' }})
    routes: List[PostNetworks201ApplicationJSONNetworkRoutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    servers: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    subnets: List[PostNetworks201ApplicationJSONNetworkSubnets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSON:
    network: Optional[PostNetworks201ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass
class PostNetworksResponse:
    content_type: str = field(default=None)
    post_networks_201_application_json_object: Optional[PostNetworks201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
