from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNetworksQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONMeta:
    pagination: GetNetworks200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksProtection:
    r"""GetNetworks200ApplicationJSONNetworksProtection
    Protection configuration for the Network
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksRoutes:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworksSubnets:
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSONNetworks:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetNetworks200ApplicationJSONNetworksProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: List[GetNetworks200ApplicationJSONNetworksRoutes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: List[GetNetworks200ApplicationJSONNetworksSubnets] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclass
class GetNetworks200ApplicationJSON:
    networks: List[GetNetworks200ApplicationJSONNetworks] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    meta: Optional[GetNetworks200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetNetworksRequest:
    query_params: GetNetworksQueryParams = field()
    

@dataclass
class GetNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    get_networks_200_application_json_object: Optional[GetNetworks200ApplicationJSON] = field(default=None)
    
