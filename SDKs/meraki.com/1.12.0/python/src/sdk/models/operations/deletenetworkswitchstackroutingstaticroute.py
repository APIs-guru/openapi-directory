from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: DeleteNetworkSwitchStackRoutingStaticRoutePathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
