from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNetworksIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkProtection:
    r"""GetNetworksID200ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSONNetwork:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetNetworksID200ApplicationJSONNetworkProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: List[GetNetworksID200ApplicationJSONNetworkRoutes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: List[GetNetworksID200ApplicationJSONNetworkSubnets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclass
class GetNetworksID200ApplicationJSON:
    network: Optional[GetNetworksID200ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass
class GetNetworksIDRequest:
    path_params: GetNetworksIDPathParams = field()
    

@dataclass
class GetNetworksIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_networks_id_200_application_json_object: Optional[GetNetworksID200ApplicationJSON] = field(default=None)
    
