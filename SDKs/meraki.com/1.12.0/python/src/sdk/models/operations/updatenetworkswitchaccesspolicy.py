from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum(str, Enum):
    EIGHT_HUNDRED_AND_TWO_1X = "802.1x"
    MAC_AUTHENTICATION_BYPASS = "MAC authentication bypass"
    HYBRID_AUTHENTICATION = "Hybrid authentication"

class UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum(str, Enum):
    SINGLE_HOST = "Single-Host"
    MULTI_DOMAIN = "Multi-Domain"
    MULTI_HOST = "Multi-Host"
    MULTI_AUTH = "Multi-Auth"


@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth:
    r"""UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
    Critical auth settings for when authentication is rejected by the RADIUS server
    """
    
    data_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataVlanId') }})
    suspend_port_bounce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPortBounce') }})
    voice_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanId') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadius:
    r"""UpdateNetworkSwitchAccessPolicyRequestBodyRadius
    Object for RADIUS Settings
    """
    
    critical_auth: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criticalAuth') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBody:
    access_policy_type: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
    guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestVlanId') }})
    host_mode: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostMode') }})
    increase_access_speed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increaseAccessSpeed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    radius: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadius] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    radius_accounting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingEnabled') }})
    radius_accounting_servers: Optional[List[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingServers') }})
    radius_coa_support_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCoaSupportEnabled') }})
    radius_group_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGroupAttribute') }})
    radius_servers: Optional[List[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServers') }})
    radius_testing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusTestingEnabled') }})
    url_redirect_walled_garden_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenEnabled') }})
    url_redirect_walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenRanges') }})
    voice_vlan_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanClients') }})
    

@dataclass
class UpdateNetworkSwitchAccessPolicyRequest:
    path_params: UpdateNetworkSwitchAccessPolicyPathParams = field()
    request: Optional[UpdateNetworkSwitchAccessPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAccessPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_access_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
