from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchAccessPolicyPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum(str, Enum):
    EIGHT_HUNDRED_AND_TWO_1X = "802.1x"
    MAC_AUTHENTICATION_BYPASS = "MAC authentication bypass"
    HYBRID_AUTHENTICATION = "Hybrid authentication"

class CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum(str, Enum):
    SINGLE_HOST = "Single-Host"
    MULTI_DOMAIN = "Multi-Domain"
    MULTI_HOST = "Multi-Host"
    MULTI_AUTH = "Multi-Auth"


@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth:
    r"""CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
    Critical auth settings for when authentication is rejected by the RADIUS server
    """
    
    data_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataVlanId') }})
    suspend_port_bounce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPortBounce') }})
    voice_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanId') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadius:
    r"""CreateNetworkSwitchAccessPolicyRequestBodyRadius
    Object for RADIUS Settings
    """
    
    critical_auth: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criticalAuth') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBody:
    host_mode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostMode') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    radius_accounting_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingEnabled') }})
    radius_coa_support_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCoaSupportEnabled') }})
    radius_servers: List[CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServers') }})
    radius_testing_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusTestingEnabled') }})
    url_redirect_walled_garden_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenEnabled') }})
    access_policy_type: Optional[CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
    guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestVlanId') }})
    increase_access_speed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increaseAccessSpeed') }})
    radius: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadius] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    radius_accounting_servers: Optional[List[CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingServers') }})
    radius_group_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGroupAttribute') }})
    url_redirect_walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenRanges') }})
    voice_vlan_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanClients') }})
    

@dataclass
class CreateNetworkSwitchAccessPolicyRequest:
    path_params: CreateNetworkSwitchAccessPolicyPathParams = field()
    request: CreateNetworkSwitchAccessPolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchAccessPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_access_policy_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
