from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequests:
    user_dto: Optional[shared.UserDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_dto1: Optional[shared.UserDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_dto2: Optional[shared.UserDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field(default=None)
    request: UpdateUserRequests = field(default=None)
    security: UpdateUserSecurity = field(default=None)
    

@dataclass
class UpdateUserResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
