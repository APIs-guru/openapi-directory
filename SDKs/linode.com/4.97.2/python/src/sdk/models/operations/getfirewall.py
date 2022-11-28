from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_FIREWALL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallPathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetFirewallDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetFirewallRequest:
    path_params: GetFirewallPathParams = field()
    security: GetFirewallSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    firewall: Optional[shared.Firewall] = field(default=None)
    get_firewall_default_application_json_object: Optional[GetFirewallDefaultApplicationJSON] = field(default=None)
    
