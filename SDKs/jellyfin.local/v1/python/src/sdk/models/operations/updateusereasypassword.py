from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserEasyPasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserEasyPasswordRequests:
    update_user_easy_password: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_user_easy_password1: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_user_easy_password2: Optional[shared.UpdateUserEasyPassword] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserEasyPasswordSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserEasyPasswordRequest:
    path_params: UpdateUserEasyPasswordPathParams = field(default=None)
    request: UpdateUserEasyPasswordRequests = field(default=None)
    security: UpdateUserEasyPasswordSecurity = field(default=None)
    

@dataclass
class UpdateUserEasyPasswordResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
