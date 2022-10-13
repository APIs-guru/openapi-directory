from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersRequest:
    request: shared.User = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
