from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersNodesListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersNodesListRequest:
    path_params: UsersNodesListPathParams = field()
    

@dataclass
class UsersNodesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
