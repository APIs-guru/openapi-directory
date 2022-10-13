from dataclasses import dataclass, field



@dataclass
class DeleteDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeviceSwitchRoutingStaticRouteRequest:
    path_params: DeleteDeviceSwitchRoutingStaticRoutePathParams = field(default=None)
    

@dataclass
class DeleteDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
