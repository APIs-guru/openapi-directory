from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    policy: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody:
    rules: Optional[List[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesRequest:
    path_params: UpdateNetworkApplianceFirewallL7FirewallRulesPathParams = field()
    request: Optional[UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallL7FirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
