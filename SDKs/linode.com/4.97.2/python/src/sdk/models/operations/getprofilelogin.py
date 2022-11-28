from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProfileLoginPathParams:
    login_id: int = field(metadata={'path_param': { 'field_name': 'loginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileLoginSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetProfileLoginDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetProfileLoginRequest:
    path_params: GetProfileLoginPathParams = field()
    security: GetProfileLoginSecurity = field()
    

@dataclass
class GetProfileLoginResponse:
    content_type: str = field()
    status_code: int = field()
    login: Optional[shared.Login] = field(default=None)
    get_profile_login_default_application_json_object: Optional[GetProfileLoginDefaultApplicationJSON] = field(default=None)
    
