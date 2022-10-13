from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_FIREWALL_RULES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallRulesPathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallRulesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFirewallRulesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFirewallRulesSecurity:
    option1: Optional[GetFirewallRulesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFirewallRulesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFirewallRulesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetFirewallRulesPathParams = field(default=None)
    security: GetFirewallRulesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewallRulesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetFirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_firewall_rules_default_application_json_object: Optional[GetFirewallRulesDefaultApplicationJSON] = field(default=None)
    rules: Optional[shared.Rules] = field(default=None)
    
