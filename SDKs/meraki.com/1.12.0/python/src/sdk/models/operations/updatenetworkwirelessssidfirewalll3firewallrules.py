from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules:
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody:
    allow_lan_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowLanAccess') }})
    rules: Optional[List[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
