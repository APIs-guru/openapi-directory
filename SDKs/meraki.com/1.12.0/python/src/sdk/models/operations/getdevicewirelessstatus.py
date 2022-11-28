from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceWirelessStatusPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceWirelessStatusRequest:
    path_params: GetDeviceWirelessStatusPathParams = field()
    

@dataclass
class GetDeviceWirelessStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_wireless_status_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
