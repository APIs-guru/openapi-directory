from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules:
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    syslog_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslogEnabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams = field()
    request: Optional[UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallCellularFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_cellular_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
