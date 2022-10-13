from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserAccountsUserAccountIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchUserAccountsUserAccountIDRequest:
    path_params: PatchUserAccountsUserAccountIDPathParams = field(default=None)
    query_params: PatchUserAccountsUserAccountIDQueryParams = field(default=None)
    

@dataclass
class PatchUserAccountsUserAccountIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
