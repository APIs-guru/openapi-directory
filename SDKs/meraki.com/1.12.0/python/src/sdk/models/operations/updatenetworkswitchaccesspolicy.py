from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    data_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataVlanId' }})
    suspend_port_bounce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspendPortBounce' }})
    voice_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceVlanId' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadius:
    critical_auth: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criticalAuth' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessPolicyRequestBody:
    access_policy_type: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyType' }})
    guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestVlanId' }})
    host_mode: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostMode' }})
    increase_access_speed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'increaseAccessSpeed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    radius: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadius] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    radius_accounting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingEnabled' }})
    radius_accounting_servers: Optional[List[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingServers' }})
    radius_coa_support_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusCoaSupportEnabled' }})
    radius_group_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusGroupAttribute' }})
    radius_servers: Optional[List[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusServers' }})
    radius_testing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusTestingEnabled' }})
    url_redirect_walled_garden_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRedirectWalledGardenEnabled' }})
    url_redirect_walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRedirectWalledGardenRanges' }})
    voice_vlan_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceVlanClients' }})
    

@dataclass
class UpdateNetworkSwitchAccessPolicyRequest:
    path_params: UpdateNetworkSwitchAccessPolicyPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchAccessPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAccessPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_access_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
