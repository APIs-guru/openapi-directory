from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUserSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserSecurity:
    option1: Optional[GetUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    security: GetUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    get_user_default_application_json_object: Optional[GetUserDefaultApplicationJSON] = field(default=None)
    
