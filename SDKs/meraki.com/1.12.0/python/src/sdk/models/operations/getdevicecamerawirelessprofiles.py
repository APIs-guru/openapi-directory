from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraWirelessProfilesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraWirelessProfilesRequest:
    path_params: GetDeviceCameraWirelessProfilesPathParams = field(default=None)
    

@dataclass
class GetDeviceCameraWirelessProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
