from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceCameraWirelessProfilesPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraWirelessProfilesRequestBodyIds:
    r"""UpdateDeviceCameraWirelessProfilesRequestBodyIds
    The ids of the wireless profile to assign to the given camera
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclass
class UpdateDeviceCameraWirelessProfilesRequestBody:
    ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclass
class UpdateDeviceCameraWirelessProfilesRequest:
    path_params: UpdateDeviceCameraWirelessProfilesPathParams = field()
    request: UpdateDeviceCameraWirelessProfilesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCameraWirelessProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
