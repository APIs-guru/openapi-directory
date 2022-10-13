from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequestBody:
    advertise_via_ospf_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiseViaOspfEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_hop_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextHopIp' }})
    prefer_over_ospf_routes_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferOverOspfRoutesEnabled' }})
    subnet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: CreateNetworkSwitchStackRoutingStaticRoutePathParams = field(default=None)
    request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_stack_routing_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
