from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum(str, Enum):
    MINIMIZE_UPGRADE_TIME = "minimizeUpgradeTime"
    MINIMIZE_CLIENT_DOWNTIME = "minimizeClientDowntime"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSettingsRequestBody:
    ipv6_bridge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6BridgeEnabled' }})
    led_lights_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledLightsOn' }})
    location_analytics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationAnalyticsEnabled' }})
    meshing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshingEnabled' }})
    upgrade_strategy: Optional[UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeStrategy' }})
    

@dataclass
class UpdateNetworkWirelessSettingsRequest:
    path_params: UpdateNetworkWirelessSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
