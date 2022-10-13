from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCameraWirelessProfilesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraWirelessProfilesRequestBodyIds:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary' }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraWirelessProfilesRequestBody:
    ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class UpdateDeviceCameraWirelessProfilesRequest:
    path_params: UpdateDeviceCameraWirelessProfilesPathParams = field(default=None)
    request: UpdateDeviceCameraWirelessProfilesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraWirelessProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
