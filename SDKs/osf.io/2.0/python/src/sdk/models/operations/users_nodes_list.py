from dataclasses import dataclass, field
from typing import List


@dataclass
class UsersNodesListPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersNodesListRequest:
    path_params: UsersNodesListPathParams = field(default=None)
    

@dataclass
class UsersNodesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
