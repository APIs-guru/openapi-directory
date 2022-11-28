from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAccountLoginPathParams:
    login_id: int = field(metadata={'path_param': { 'field_name': 'loginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountLoginSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetAccountLoginDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetAccountLoginRequest:
    path_params: GetAccountLoginPathParams = field()
    security: GetAccountLoginSecurity = field()
    

@dataclass
class GetAccountLoginResponse:
    content_type: str = field()
    status_code: int = field()
    login: Optional[shared.Login] = field(default=None)
    get_account_login_default_application_json_object: Optional[GetAccountLoginDefaultApplicationJSON] = field(default=None)
    
