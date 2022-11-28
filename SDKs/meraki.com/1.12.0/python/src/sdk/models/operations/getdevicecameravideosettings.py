from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraVideoSettingsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraVideoSettingsRequest:
    path_params: GetDeviceCameraVideoSettingsPathParams = field()
    

@dataclass
class GetDeviceCameraVideoSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_video_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
