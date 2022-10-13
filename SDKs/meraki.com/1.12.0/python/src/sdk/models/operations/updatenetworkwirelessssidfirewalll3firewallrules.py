from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
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
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody:
    allow_lan_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowLanAccess' }})
    rules: Optional[List[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
