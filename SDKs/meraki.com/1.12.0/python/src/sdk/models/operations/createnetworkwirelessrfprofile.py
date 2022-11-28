from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkWirelessRfProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum(str, Enum):
    DUAL = "dual"
    TWO_4GHZ = "2.4ghz"
    FIVEGHZ = "5ghz"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyApBandSettings:
    r"""CreateNetworkWirelessRfProfileRequestBodyApBandSettings
    Settings that will be enabled if selectionType is set to 'ap'.
    """
    
    band_operation_mode: Optional[CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandOperationMode') }})
    band_steering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSteeringEnabled') }})
    
class CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum(str, Enum):
    SSID = "ssid"
    AP = "ap"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings:
    r"""CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
    Settings related to 5Ghz band
    """
    
    channel_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelWidth') }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPower') }})
    min_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxsop') }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAutoChannels') }})
    
class CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum(str, Enum):
    BAND = "band"
    SSID = "ssid"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings:
    r"""CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
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
class CreateNetworkWirelessRfProfileRequestBody:
    band_selection_type: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSelectionType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ap_band_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyApBandSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apBandSettings') }})
    client_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientBalancingEnabled') }})
    five_ghz_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiveGhzSettings') }})
    min_bitrate_type: Optional[CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrateType') }})
    two_four_ghz_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoFourGhzSettings') }})
    

@dataclass
class CreateNetworkWirelessRfProfileRequest:
    path_params: CreateNetworkWirelessRfProfilePathParams = field()
    request: CreateNetworkWirelessRfProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWirelessRfProfileResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_wireless_rf_profile_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
