from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUsersUserEmailPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUsersUserEmailRequest:
    path_params: PatchUsersUserEmailPathParams = field()
    request: Optional[shared.User] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchUsersUserEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
