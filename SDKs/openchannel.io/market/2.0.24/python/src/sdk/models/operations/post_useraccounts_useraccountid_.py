from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUserAccountsUserAccountIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUserAccountsUserAccountIDRequest:
    path_params: PostUserAccountsUserAccountIDPathParams = field()
    query_params: PostUserAccountsUserAccountIDQueryParams = field()
    

@dataclass
class PostUserAccountsUserAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
