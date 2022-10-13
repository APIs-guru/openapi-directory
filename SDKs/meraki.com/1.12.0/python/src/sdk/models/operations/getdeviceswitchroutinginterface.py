from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = field(default=None, metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchRoutingInterfaceRequest:
    path_params: GetDeviceSwitchRoutingInterfacePathParams = field(default=None)
    

@dataclass
class GetDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_switch_routing_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
