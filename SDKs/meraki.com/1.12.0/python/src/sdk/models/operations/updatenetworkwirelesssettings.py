from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum(str, Enum):
    MINIMIZE_UPGRADE_TIME = "minimizeUpgradeTime"
    MINIMIZE_CLIENT_DOWNTIME = "minimizeClientDowntime"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSettingsRequestBody:
    ipv6_bridge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6BridgeEnabled') }})
    led_lights_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledLightsOn') }})
    location_analytics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationAnalyticsEnabled') }})
    meshing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshingEnabled') }})
    upgrade_strategy: Optional[UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeStrategy') }})
    

@dataclass
class UpdateNetworkWirelessSettingsRequest:
    path_params: UpdateNetworkWirelessSettingsPathParams = field()
    request: Optional[UpdateNetworkWirelessSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
