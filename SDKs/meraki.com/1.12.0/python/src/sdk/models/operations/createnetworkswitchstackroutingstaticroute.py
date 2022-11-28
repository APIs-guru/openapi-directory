from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequestBody:
    next_hop_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHopIp') }})
    subnet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    advertise_via_ospf_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiseViaOspfEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prefer_over_ospf_routes_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferOverOspfRoutesEnabled') }})
    

@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: CreateNetworkSwitchStackRoutingStaticRoutePathParams = field()
    request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_stack_routing_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
