from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUsersUserIDPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDRequest:
    path_params: GetUsersUserIDPathParams = field()
    

@dataclass
class GetUsersUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
