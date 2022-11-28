from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchRoutingInterfacesPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchRoutingInterfacesRequest:
    path_params: GetDeviceSwitchRoutingInterfacesPathParams = field()
    

@dataclass
class GetDeviceSwitchRoutingInterfacesResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_routing_interfaces_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
