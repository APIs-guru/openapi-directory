from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailPathParams:
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailRequest:
    path_params: GetUsersUserEmailPathParams = field(default=None)
    

@dataclass
class GetUsersUserEmailResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
