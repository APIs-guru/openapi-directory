from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeactivateUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeactivateUserRequest:
    path_params: DeactivateUserPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class DeactivateUserResponse:
    content_type: str = field()
    status_code: int = field()
    
