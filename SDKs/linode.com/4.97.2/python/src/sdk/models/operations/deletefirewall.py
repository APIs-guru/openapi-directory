from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


DELETE_FIREWALL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteFirewallPathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteFirewallDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteFirewallRequest:
    path_params: DeleteFirewallPathParams = field()
    security: DeleteFirewallSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    delete_firewall_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_firewall_default_application_json_object: Optional[DeleteFirewallDefaultApplicationJSON] = field(default=None)
    
