from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersRequest:
    request: shared.User = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
