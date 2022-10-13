from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceManagementInterfacePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceManagementInterfaceRequest:
    path_params: GetDeviceManagementInterfacePathParams = field(default=None)
    

@dataclass
class GetDeviceManagementInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
