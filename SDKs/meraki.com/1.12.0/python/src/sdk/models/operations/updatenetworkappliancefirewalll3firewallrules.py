from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallL3FirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules:
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    syslog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogEnabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    syslog_default_rule: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogDefaultRule') }})
    

@dataclass
class UpdateNetworkApplianceFirewallL3FirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallL3FirewallRulesPathParams = field()
    request: Optional[UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallL3FirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
