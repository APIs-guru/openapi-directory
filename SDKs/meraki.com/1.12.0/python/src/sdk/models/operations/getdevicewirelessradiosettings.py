from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceWirelessRadioSettingsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceWirelessRadioSettingsRequest:
    path_params: GetDeviceWirelessRadioSettingsPathParams = field()
    

@dataclass
class GetDeviceWirelessRadioSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_wireless_radio_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
