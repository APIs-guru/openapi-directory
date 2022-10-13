from dataclasses import dataclass, field
from typing import List


@dataclass
class UsersInstitutionsListPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersInstitutionsListRequest:
    path_params: UsersInstitutionsListPathParams = field(default=None)
    

@dataclass
class UsersInstitutionsListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
