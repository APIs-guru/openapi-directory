from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserPasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserPasswordRequests:
    update_user_password: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_user_password1: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_user_password2: Optional[shared.UpdateUserPassword] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserPasswordSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserPasswordRequest:
    path_params: UpdateUserPasswordPathParams = field(default=None)
    request: UpdateUserPasswordRequests = field(default=None)
    security: UpdateUserPasswordSecurity = field(default=None)
    

@dataclass
class UpdateUserPasswordResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
