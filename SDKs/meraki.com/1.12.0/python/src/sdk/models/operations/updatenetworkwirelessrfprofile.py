from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessRfProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum(str, Enum):
    DUAL = "dual"
    TWO_4GHZ = "2.4ghz"
    FIVEGHZ = "5ghz"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings:
    band_operation_mode: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandOperationMode' }})
    band_steering_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandSteeringEnabled' }})
    
class UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum(str, Enum):
    SSID = "ssid"
    AP = "ap"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings:
    channel_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelWidth' }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPower' }})
    min_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrate' }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPower' }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rxsop' }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validAutoChannels' }})
    
class UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum(str, Enum):
    BAND = "band"
    SSID = "ssid"


@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings:
    ax_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'axEnabled' }})
    max_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPower' }})
    min_bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrate' }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPower' }})
    rxsop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rxsop' }})
    valid_auto_channels: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validAutoChannels' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessRfProfileRequestBody:
    ap_band_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apBandSettings' }})
    band_selection_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandSelectionType' }})
    client_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientBalancingEnabled' }})
    five_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fiveGhzSettings' }})
    min_bitrate_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBitrateType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    two_four_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twoFourGhzSettings' }})
    

@dataclass
class UpdateNetworkWirelessRfProfileRequest:
    path_params: UpdateNetworkWirelessRfProfilePathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessRfProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessRfProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_rf_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
