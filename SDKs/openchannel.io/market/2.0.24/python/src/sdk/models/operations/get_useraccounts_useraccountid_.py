from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserAccountsUserAccountIDRequest:
    path_params: GetUserAccountsUserAccountIDPathParams = field()
    

@dataclass
class GetUserAccountsUserAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
