from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ChangePasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChangePasswordRequestBodyNewPassword:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ChangePasswordRequestBodyOldPassword:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ChangePasswordRequestBody:
    new_password: Optional[ChangePasswordRequestBodyNewPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPassword' }})
    old_password: Optional[ChangePasswordRequestBodyOldPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldPassword' }})
    

@dataclass
class ChangePasswordRequest:
    path_params: ChangePasswordPathParams = field(default=None)
    request: Optional[ChangePasswordRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
