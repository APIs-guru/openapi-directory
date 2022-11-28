from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailRequest:
    path_params: GetUsersUserEmailPathParams = field()
    

@dataclass
class GetUsersUserEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
