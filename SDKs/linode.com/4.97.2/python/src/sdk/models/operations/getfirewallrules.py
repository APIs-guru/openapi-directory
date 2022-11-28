from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_FIREWALL_RULES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallRulesPathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallRulesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetFirewallRulesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetFirewallRulesRequest:
    path_params: GetFirewallRulesPathParams = field()
    security: GetFirewallRulesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_firewall_rules_default_application_json_object: Optional[GetFirewallRulesDefaultApplicationJSON] = field(default=None)
    rules: Optional[shared.Rules] = field(default=None)
    
