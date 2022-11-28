from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersReadPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersReadRequest:
    path_params: UsersReadPathParams = field()
    

@dataclass
class UsersReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
