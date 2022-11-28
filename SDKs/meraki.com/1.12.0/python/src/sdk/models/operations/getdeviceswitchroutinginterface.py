from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchRoutingInterfaceRequest:
    path_params: GetDeviceSwitchRoutingInterfacePathParams = field()
    

@dataclass
class GetDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_routing_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
