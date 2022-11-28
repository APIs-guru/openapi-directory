from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserEmailInviteEmailPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserEmailInviteEmailRequest:
    path_params: PostUsersUserEmailInviteEmailPathParams = field()
    

@dataclass
class PostUsersUserEmailInviteEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
