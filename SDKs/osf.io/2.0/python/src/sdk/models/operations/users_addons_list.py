from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersAddonsListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonsListRequest:
    path_params: UsersAddonsListPathParams = field()
    

@dataclass
class UsersAddonsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
