from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateUserSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateUserSecurity:
    option1: Optional[UpdateUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field(default=None)
    request: Optional[shared.User] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateUserDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    update_user_default_application_json_object: Optional[UpdateUserDefaultApplicationJSON] = field(default=None)
    
