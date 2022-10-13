from dataclasses import dataclass, field



@dataclass
class GetUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserAccountsUserAccountIDRequest:
    path_params: GetUserAccountsUserAccountIDPathParams = field(default=None)
    

@dataclass
class GetUserAccountsUserAccountIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
