from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UnsuspendUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsuspendUserRequest:
    path_params: UnsuspendUserPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class UnsuspendUserResponse:
    content_type: str = field()
    status_code: int = field()
    
