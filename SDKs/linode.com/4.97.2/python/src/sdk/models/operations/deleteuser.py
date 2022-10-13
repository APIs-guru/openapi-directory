from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteUserSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUserSecurity:
    option1: Optional[DeleteUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = field(default=None)
    security: DeleteUserSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteUserDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_user_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_user_default_application_json_object: Optional[DeleteUserDefaultApplicationJSON] = field(default=None)
    
