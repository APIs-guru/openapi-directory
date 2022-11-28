from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    syslog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogEnabled') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody:
    rules: Optional[List[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    syslog_default_rule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogDefaultRule') }})
    

@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest:
    path_params: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams = field()
    request: Optional[UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
