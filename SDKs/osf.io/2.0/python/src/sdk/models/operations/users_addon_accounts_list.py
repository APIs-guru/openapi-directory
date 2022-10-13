from dataclasses import dataclass, field
from typing import List


@dataclass
class UsersAddonAccountsListPathParams:
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonAccountsListRequest:
    path_params: UsersAddonAccountsListPathParams = field(default=None)
    

@dataclass
class UsersAddonAccountsListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
