from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersAddonsReadPathParams:
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonsReadRequest:
    path_params: UsersAddonsReadPathParams = field()
    

@dataclass
class UsersAddonsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
