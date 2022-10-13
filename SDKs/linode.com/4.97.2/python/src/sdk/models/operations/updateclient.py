from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateClientPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateClientSecurity:
    option1: Optional[UpdateClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateClientRequest:
    path_params: UpdateClientPathParams = field(default=None)
    request: Optional[shared.OAuthClient] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateClientResponse:
    content_type: str = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    status_code: int = field(default=None)
    update_client_default_application_json_object: Optional[UpdateClientDefaultApplicationJSON] = field(default=None)
    
