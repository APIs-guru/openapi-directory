from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserEmailInviteEmailPathParams:
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserEmailInviteEmailRequest:
    path_params: PostUsersUserEmailInviteEmailPathParams = field(default=None)
    

@dataclass
class PostUsersUserEmailInviteEmailResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
