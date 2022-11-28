from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessRfProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = field(metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum(str, Enum):
    DUAL = "dual"
    TWO_4GHZ = "2.4ghz"
    FIVEGHZ = "5ghz"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
    Settings that will be enabled if selectionType is set to 'ap'.
    """
    
    band_operation_mode: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandOperationMode') }})
    band_steering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSteeringEnabled') }})
    
class UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum(str, Enum):
    SSID = "ssid"
    AP = "ap"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
    Settings related to 5Ghz band
    """
    
    channel_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelWidth') }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPower') }})
    min_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxsop') }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAutoChannels') }})
    
class UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum(str, Enum):
    BAND = "band"
    SSID = "ssid"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
    Settings related to 2.4Ghz band
    """
    
    ax_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('axEnabled') }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPower') }})
    min_bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxsop') }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAutoChannels') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBody:
    ap_band_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apBandSettings') }})
    band_selection_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSelectionType') }})
    client_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientBalancingEnabled') }})
    five_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiveGhzSettings') }})
    min_bitrate_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrateType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    two_four_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoFourGhzSettings') }})
    

@dataclass
class UpdateNetworkWirelessRfProfileRequest:
    path_params: UpdateNetworkWirelessRfProfilePathParams = field()
    request: Optional[UpdateNetworkWirelessRfProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessRfProfileResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_rf_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
