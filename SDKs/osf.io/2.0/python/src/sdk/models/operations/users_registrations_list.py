from dataclasses import dataclass, field
from typing import List


@dataclass
class UsersRegistrationsListPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersRegistrationsListRequest:
    path_params: UsersRegistrationsListPathParams = field(default=None)
    

@dataclass
class UsersRegistrationsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
