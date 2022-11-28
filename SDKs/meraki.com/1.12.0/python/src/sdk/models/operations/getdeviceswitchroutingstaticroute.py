from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchRoutingStaticRouteRequest:
    path_params: GetDeviceSwitchRoutingStaticRoutePathParams = field()
    

@dataclass
class GetDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_routing_static_route_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
