from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceCameraVideoSettingsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraVideoSettingsRequestBody:
    external_rtsp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalRtspEnabled') }})
    

@dataclass
class UpdateDeviceCameraVideoSettingsRequest:
    path_params: UpdateDeviceCameraVideoSettingsPathParams = field()
    request: Optional[UpdateDeviceCameraVideoSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraVideoSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_camera_video_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
