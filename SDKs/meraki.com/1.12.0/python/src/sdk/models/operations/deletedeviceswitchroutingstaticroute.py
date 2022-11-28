from dataclasses import dataclass, field



@dataclass
class DeleteDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeviceSwitchRoutingStaticRouteRequest:
    path_params: DeleteDeviceSwitchRoutingStaticRoutePathParams = field()
    

@dataclass
class DeleteDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    
