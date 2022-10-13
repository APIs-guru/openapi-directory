from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCameraVideoSettingsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraVideoSettingsRequestBody:
    external_rtsp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalRtspEnabled' }})
    

@dataclass
class UpdateDeviceCameraVideoSettingsRequest:
    path_params: UpdateDeviceCameraVideoSettingsPathParams = field(default=None)
    request: Optional[UpdateDeviceCameraVideoSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraVideoSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_camera_video_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
