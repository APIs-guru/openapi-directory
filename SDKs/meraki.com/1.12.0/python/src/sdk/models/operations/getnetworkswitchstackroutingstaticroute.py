from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: GetNetworkSwitchStackRoutingStaticRoutePathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_stack_routing_static_route_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
