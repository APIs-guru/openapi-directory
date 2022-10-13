from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateUserSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateUserSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateUserSecurity:
    option1: Optional[CreateUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateUserRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateUserDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    create_user_default_application_json_object: Optional[CreateUserDefaultApplicationJSON] = field(default=None)
    
