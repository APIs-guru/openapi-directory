from dataclasses import dataclass, field



@dataclass
class DeleteUserAccountsUserAccountIDPathParams:
    user_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserAccountsUserAccountIDRequest:
    path_params: DeleteUserAccountsUserAccountIDPathParams = field(default=None)
    

@dataclass
class DeleteUserAccountsUserAccountIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
