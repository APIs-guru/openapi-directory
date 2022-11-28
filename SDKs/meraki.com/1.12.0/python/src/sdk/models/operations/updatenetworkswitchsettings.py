from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum(str, Enum):
    COMBINED = "combined"
    REDUNDANT = "redundant"
    USE_NETWORK_SETTING = "useNetworkSetting"


@dataclass_json
@dataclass
class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions:
    power_type: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerType') }})
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchSettingsRequestBody:
    power_exceptions: Optional[List[UpdateNetworkSwitchSettingsRequestBodyPowerExceptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerExceptions') }})
    use_combined_power: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCombinedPower') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass
class UpdateNetworkSwitchSettingsRequest:
    path_params: UpdateNetworkSwitchSettingsPathParams = field()
    request: Optional[UpdateNetworkSwitchSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
