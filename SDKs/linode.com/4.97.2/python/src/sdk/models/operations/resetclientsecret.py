from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ResetClientSecretPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetClientSecretSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ResetClientSecretDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ResetClientSecretRequest:
    path_params: ResetClientSecretPathParams = field()
    security: ResetClientSecretSecurity = field()
    

@dataclass
class ResetClientSecretResponse:
    content_type: str = field()
    status_code: int = field()
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    reset_client_secret_default_application_json_object: Optional[ResetClientSecretDefaultApplicationJSON] = field(default=None)
    
