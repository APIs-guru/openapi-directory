from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAccountLoginPathParams:
    login_id: int = field(default=None, metadata={'path_param': { 'field_name': 'loginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountLoginSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountLoginSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountLoginSecurity:
    option1: Optional[GetAccountLoginSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAccountLoginSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAccountLoginRequest:
    path_params: GetAccountLoginPathParams = field(default=None)
    security: GetAccountLoginSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAccountLoginDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAccountLoginResponse:
    content_type: str = field(default=None)
    login: Optional[shared.Login] = field(default=None)
    status_code: int = field(default=None)
    get_account_login_default_application_json_object: Optional[GetAccountLoginDefaultApplicationJSON] = field(default=None)
    
