from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FirewallInfoFirewallRuleTypeEnum(str, Enum):
    FIREWALL_RULE_TYPE_UNSPECIFIED = "FIREWALL_RULE_TYPE_UNSPECIFIED"
    HIERARCHICAL_FIREWALL_POLICY_RULE = "HIERARCHICAL_FIREWALL_POLICY_RULE"
    VPC_FIREWALL_RULE = "VPC_FIREWALL_RULE"
    IMPLIED_VPC_FIREWALL_RULE = "IMPLIED_VPC_FIREWALL_RULE"
    SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE"
    NETWORK_FIREWALL_POLICY_RULE = "NETWORK_FIREWALL_POLICY_RULE"


@dataclass_json
@dataclass
class FirewallInfo:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    firewall_rule_type: Optional[FirewallInfoFirewallRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewallRuleType' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    target_service_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetServiceAccounts' }})
    target_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetTags' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
