from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


UPDATE_FIREWALL_RULES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateFirewallRulesPathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFirewallRulesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateFirewallRulesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateFirewallRulesRequest:
    path_params: UpdateFirewallRulesPathParams = field()
    security: UpdateFirewallRulesSecurity = field()
    request: Optional[shared.Rules] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateFirewallRulesResponse:
    content_type: str = field()
    status_code: int = field()
    rules: Optional[shared.Rules] = field(default=None)
    update_firewall_rules_default_application_json_object: Optional[UpdateFirewallRulesDefaultApplicationJSON] = field(default=None)
    
