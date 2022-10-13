from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceWirelessRadioSettingsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings:
    channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    channel_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelWidth' }})
    target_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPower' }})
    

@dataclass_json
@dataclass
class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings:
    channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    target_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPower' }})
    

@dataclass_json
@dataclass
class UpdateDeviceWirelessRadioSettingsRequestBody:
    five_ghz_settings: Optional[UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fiveGhzSettings' }})
    rf_profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rfProfileId' }})
    two_four_ghz_settings: Optional[UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twoFourGhzSettings' }})
    

@dataclass
class UpdateDeviceWirelessRadioSettingsRequest:
    path_params: UpdateDeviceWirelessRadioSettingsPathParams = field(default=None)
    request: Optional[UpdateDeviceWirelessRadioSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceWirelessRadioSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_wireless_radio_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
