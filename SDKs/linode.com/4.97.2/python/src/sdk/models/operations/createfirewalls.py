from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_FIREWALLS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass_json
@dataclass
class CreateFirewallsRequestBodyDevices:
    r"""CreateFirewallsRequestBodyDevices
    Devices to create for this Firewall.
    When a Device is created, the Firewall is assigned to its associated service.
    Currently, Devices can only be created for Linode instances.
    
    """
    
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linodes') }})
    
class CreateFirewallsRequestBodyRulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class CreateFirewallsRequestBodyRulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class CreateFirewallsRequestBodyRules:
    r"""CreateFirewallsRequestBodyRules
    The inbound and outbound access rules to apply to the Firewall.
    
    A Firewall may have up to 25 rules across its inbound and outbound rulesets.
    
    """
    
    inbound: Optional[List[shared.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound') }})
    inbound_policy: Optional[CreateFirewallsRequestBodyRulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_policy') }})
    outbound: Optional[List[shared.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound') }})
    outbound_policy: Optional[CreateFirewallsRequestBodyRulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_policy') }})
    

@dataclass_json
@dataclass
class CreateFirewallsRequestBodyInput:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    rules: CreateFirewallsRequestBodyRules = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    devices: Optional[CreateFirewallsRequestBodyDevices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateFirewallsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateFirewallsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateFirewallsRequest:
    security: CreateFirewallsSecurity = field()
    request: Optional[CreateFirewallsRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFirewallsResponse:
    content_type: str = field()
    status_code: int = field()
    firewall: Optional[shared.Firewall] = field(default=None)
    create_firewalls_default_application_json_object: Optional[CreateFirewallsDefaultApplicationJSON] = field(default=None)
    
