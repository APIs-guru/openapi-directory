from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceWirelessBluetoothSettingsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceWirelessBluetoothSettingsRequestBody:
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'major' }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minor' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass
class UpdateDeviceWirelessBluetoothSettingsRequest:
    path_params: UpdateDeviceWirelessBluetoothSettingsPathParams = field(default=None)
    request: Optional[UpdateDeviceWirelessBluetoothSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceWirelessBluetoothSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
