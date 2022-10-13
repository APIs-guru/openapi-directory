from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileLoginPathParams:
    login_id: int = field(default=None, metadata={'path_param': { 'field_name': 'loginId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileLoginSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileLoginSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileLoginSecurity:
    option1: Optional[GetProfileLoginSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileLoginSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileLoginRequest:
    path_params: GetProfileLoginPathParams = field(default=None)
    security: GetProfileLoginSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileLoginDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileLoginResponse:
    content_type: str = field(default=None)
    login: Optional[shared.Login] = field(default=None)
    status_code: int = field(default=None)
    get_profile_login_default_application_json_object: Optional[GetProfileLoginDefaultApplicationJSON] = field(default=None)
    
