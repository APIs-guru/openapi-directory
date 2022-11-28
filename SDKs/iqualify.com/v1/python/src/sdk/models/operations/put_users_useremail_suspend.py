from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersUserEmailSuspendPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersUserEmailSuspendRequest:
    path_params: PutUsersUserEmailSuspendPathParams = field()
    request: shared.SuspendedRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersUserEmailSuspendResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
