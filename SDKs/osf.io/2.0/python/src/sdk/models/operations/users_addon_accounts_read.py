from dataclasses import dataclass, field



@dataclass
class UsersAddonAccountsReadPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonAccountsReadRequest:
    path_params: UsersAddonAccountsReadPathParams = field(default=None)
    

@dataclass
class UsersAddonAccountsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
