from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersPreprintsListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersPreprintsListRequest:
    path_params: UsersPreprintsListPathParams = field()
    

@dataclass
class UsersPreprintsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
