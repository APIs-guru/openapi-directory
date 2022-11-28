from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FindUserQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class FindUserRequest:
    query_params: FindUserQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class FindUserResponse:
    content_type: str = field()
    status_code: int = field()
    
