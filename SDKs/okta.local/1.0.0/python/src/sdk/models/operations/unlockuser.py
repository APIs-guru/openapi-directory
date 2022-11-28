from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UnlockUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlockUserRequest:
    path_params: UnlockUserPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class UnlockUserResponse:
    content_type: str = field()
    status_code: int = field()
    
