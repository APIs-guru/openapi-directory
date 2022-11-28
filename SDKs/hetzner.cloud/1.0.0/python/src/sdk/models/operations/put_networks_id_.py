from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutNetworksIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutNetworksIDUpdateNetworkRequestLabels:
    r"""PutNetworksIDUpdateNetworkRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclass
class PutNetworksIDUpdateNetworkRequest:
    labels: Optional[PutNetworksIDUpdateNetworkRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkProtection:
    r"""PutNetworksID200ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSONNetwork:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PutNetworksID200ApplicationJSONNetworkProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: List[PutNetworksID200ApplicationJSONNetworkRoutes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: List[PutNetworksID200ApplicationJSONNetworkSubnets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclass
class PutNetworksID200ApplicationJSON:
    network: Optional[PutNetworksID200ApplicationJSONNetwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclass
class PutNetworksIDRequest:
    path_params: PutNetworksIDPathParams = field()
    request: Optional[PutNetworksIDUpdateNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNetworksIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_networks_id_200_application_json_object: Optional[PutNetworksID200ApplicationJSON] = field(default=None)
    
