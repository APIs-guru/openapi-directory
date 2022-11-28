from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersInstitutionsListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersInstitutionsListRequest:
    path_params: UsersInstitutionsListPathParams = field()
    

@dataclass
class UsersInstitutionsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
