from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceWirelessStatusPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceWirelessStatusRequest:
    path_params: GetDeviceWirelessStatusPathParams = field(default=None)
    

@dataclass
class GetDeviceWirelessStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_wireless_status_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
