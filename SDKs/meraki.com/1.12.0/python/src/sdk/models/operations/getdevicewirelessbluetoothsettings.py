from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceWirelessBluetoothSettingsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceWirelessBluetoothSettingsRequest:
    path_params: GetDeviceWirelessBluetoothSettingsPathParams = field(default=None)
    

@dataclass
class GetDeviceWirelessBluetoothSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
