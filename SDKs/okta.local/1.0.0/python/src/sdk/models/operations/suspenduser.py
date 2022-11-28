from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SuspendUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuspendUserRequest:
    path_params: SuspendUserPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class SuspendUserResponse:
    content_type: str = field()
    status_code: int = field()
    
