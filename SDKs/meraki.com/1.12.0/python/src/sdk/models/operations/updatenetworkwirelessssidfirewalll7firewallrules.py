from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    DENY = "deny"

class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules:
    policy: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    type: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
