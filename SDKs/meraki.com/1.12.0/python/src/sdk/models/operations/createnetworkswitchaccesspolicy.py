from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchAccessPolicyPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    data_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataVlanId' }})
    suspend_port_bounce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspendPortBounce' }})
    voice_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceVlanId' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadius:
    critical_auth: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criticalAuth' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchAccessPolicyRequestBody:
    access_policy_type: Optional[CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyType' }})
    guest_vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestVlanId' }})
    host_mode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostMode' }})
    increase_access_speed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'increaseAccessSpeed' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    radius: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadius] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    radius_accounting_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingEnabled' }})
    radius_accounting_servers: Optional[List[CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusAccountingServers' }})
    radius_coa_support_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusCoaSupportEnabled' }})
    radius_group_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusGroupAttribute' }})
    radius_servers: List[CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusServers' }})
    radius_testing_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusTestingEnabled' }})
    url_redirect_walled_garden_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRedirectWalledGardenEnabled' }})
    url_redirect_walled_garden_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRedirectWalledGardenRanges' }})
    voice_vlan_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceVlanClients' }})
    

@dataclass
class CreateNetworkSwitchAccessPolicyRequest:
    path_params: CreateNetworkSwitchAccessPolicyPathParams = field(default=None)
    request: CreateNetworkSwitchAccessPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchAccessPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_access_policy_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
