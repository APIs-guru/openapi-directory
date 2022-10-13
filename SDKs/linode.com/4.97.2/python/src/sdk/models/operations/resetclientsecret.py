from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResetClientSecretPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetClientSecretSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetClientSecretSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResetClientSecretSecurity:
    option1: Optional[ResetClientSecretSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResetClientSecretSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResetClientSecretRequest:
    path_params: ResetClientSecretPathParams = field(default=None)
    security: ResetClientSecretSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResetClientSecretDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResetClientSecretResponse:
    content_type: str = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    status_code: int = field(default=None)
    reset_client_secret_default_application_json_object: Optional[ResetClientSecretDefaultApplicationJSON] = field(default=None)
    
