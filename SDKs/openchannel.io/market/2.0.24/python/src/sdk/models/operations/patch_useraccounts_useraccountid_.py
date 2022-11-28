from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUserAccountsUserAccountIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchUserAccountsUserAccountIDRequest:
    path_params: PatchUserAccountsUserAccountIDPathParams = field()
    query_params: PatchUserAccountsUserAccountIDQueryParams = field()
    

@dataclass
class PatchUserAccountsUserAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
