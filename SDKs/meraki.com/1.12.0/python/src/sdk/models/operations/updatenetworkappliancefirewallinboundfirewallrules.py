from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcCidr' }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    syslog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syslogEnabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    syslog_default_rule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syslogDefaultRule' }})
    

@dataclass
class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallInboundFirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_inbound_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
