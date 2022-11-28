from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UsersAddonAccountsReadPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonAccountsReadRequest:
    path_params: UsersAddonAccountsReadPathParams = field()
    

@dataclass
class UsersAddonAccountsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
