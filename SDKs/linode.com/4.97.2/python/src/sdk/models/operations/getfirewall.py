from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_FIREWALL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallPathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFirewallSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFirewallSecurity:
    option1: Optional[GetFirewallSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFirewallSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFirewallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetFirewallPathParams = field(default=None)
    security: GetFirewallSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewallDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetFirewallResponse:
    content_type: str = field(default=None)
    firewall: Optional[shared.Firewall] = field(default=None)
    status_code: int = field(default=None)
    get_firewall_default_application_json_object: Optional[GetFirewallDefaultApplicationJSON] = field(default=None)
    
