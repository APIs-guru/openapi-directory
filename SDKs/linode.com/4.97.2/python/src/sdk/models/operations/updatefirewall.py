from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
UPDATE_FIREWALL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateFirewallPathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateFirewallRequestBody:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    status: Optional[shared.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class UpdateFirewallSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateFirewallSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateFirewallSecurity:
    option1: Optional[UpdateFirewallSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateFirewallSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateFirewallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFirewallPathParams = field(default=None)
    request: Optional[UpdateFirewallRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFirewallSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateFirewallDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateFirewallResponse:
    content_type: str = field(default=None)
    firewall: Optional[shared.Firewall] = field(default=None)
    status_code: int = field(default=None)
    update_firewall_default_application_json_object: Optional[UpdateFirewallDefaultApplicationJSON] = field(default=None)
    
