from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
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
    policy: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest:
    path_params: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
