from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkWirelessRfProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum(str, Enum):
    DUAL = "dual"
    TWO_4GHZ = "2.4ghz"
    FIVEGHZ = "5ghz"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyApBandSettings:
    band_operation_mode: Optional[CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandOperationMode' }})
    band_steering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandSteeringEnabled' }})
    
class CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum(str, Enum):
    SSID = "ssid"
    AP = "ap"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings:
    channel_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelWidth' }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPower' }})
    min_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrate' }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPower' }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rxsop' }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validAutoChannels' }})
    
class CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum(str, Enum):
    BAND = "band"
    SSID = "ssid"


@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings:
    ax_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'axEnabled' }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPower' }})
    min_bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrate' }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPower' }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rxsop' }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validAutoChannels' }})
    

@dataclass_json
@dataclass
class CreateNetworkWirelessRfProfileRequestBody:
    ap_band_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyApBandSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apBandSettings' }})
    band_selection_type: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandSelectionType' }})
    client_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientBalancingEnabled' }})
    five_ghz_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fiveGhzSettings' }})
    min_bitrate_type: Optional[CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrateType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    two_four_ghz_settings: Optional[CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twoFourGhzSettings' }})
    

@dataclass
class CreateNetworkWirelessRfProfileRequest:
    path_params: CreateNetworkWirelessRfProfilePathParams = field(default=None)
    request: CreateNetworkWirelessRfProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWirelessRfProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_wireless_rf_profile_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
