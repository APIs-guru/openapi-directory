from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostNetworksCreateNetworkRequestLabels:
    r"""PostNetworksCreateNetworkRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclass
class PostNetworksCreateNetworkRequestRoutes:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PostNetworksCreateNetworkRequestSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworksCreateNetworkRequestSubnets:
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PostNetworksCreateNetworkRequestSubnetsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class PostNetworksCreateNetworkRequest:
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    labels: Optional[PostNetworksCreateNetworkRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    routes: Optional[List[PostNetworksCreateNetworkRequestRoutes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    subnets: Optional[List[PostNetworksCreateNetworkRequestSubnets]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkProtection:
    r"""PostNetworks201ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkRoutes:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetworkSubnets:
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSONNetwork:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PostNetworks201ApplicationJSONNetworkProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: List[PostNetworks201ApplicationJSONNetworkRoutes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: List[PostNetworks201ApplicationJSONNetworkSubnets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclass
class PostNetworks201ApplicationJSON:
    network: Optional[PostNetworks201ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass
class PostNetworksRequest:
    request: Optional[PostNetworksCreateNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    post_networks_201_application_json_object: Optional[PostNetworks201ApplicationJSON] = field(default=None)
    
