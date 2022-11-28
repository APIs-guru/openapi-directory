from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceWirelessBluetoothSettingsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceWirelessBluetoothSettingsRequestBody:
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('major') }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minor') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass
class UpdateDeviceWirelessBluetoothSettingsRequest:
    path_params: UpdateDeviceWirelessBluetoothSettingsPathParams = field()
    request: Optional[UpdateDeviceWirelessBluetoothSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceWirelessBluetoothSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
