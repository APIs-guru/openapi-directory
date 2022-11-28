from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCurrentUserRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class GetCurrentUserResponse:
    content_type: str = field()
    status_code: int = field()
    
