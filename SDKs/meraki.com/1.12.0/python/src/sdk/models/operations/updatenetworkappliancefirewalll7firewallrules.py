from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    DENY = "deny"

class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules:
    policy: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    type: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallL7FirewallRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
