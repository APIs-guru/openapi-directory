from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcCidr' }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    syslog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syslogEnabled' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody:
    rules: Optional[List[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    syslog_default_rule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syslogDefaultRule' }})
    

@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest:
    path_params: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams = field(default=None)
    request: Optional[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
