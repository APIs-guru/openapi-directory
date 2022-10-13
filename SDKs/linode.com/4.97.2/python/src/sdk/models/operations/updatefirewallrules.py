from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
UPDATE_FIREWALL_RULES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateFirewallRulesPathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFirewallRulesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateFirewallRulesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFirewallRulesSecurity:
    option1: Optional[UpdateFirewallRulesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateFirewallRulesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateFirewallRulesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFirewallRulesPathParams = field(default=None)
    request: Optional[shared.Rules] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFirewallRulesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateFirewallRulesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateFirewallRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    rules: Optional[shared.Rules] = field(default=None)
    update_firewall_rules_default_application_json_object: Optional[UpdateFirewallRulesDefaultApplicationJSON] = field(default=None)
    
