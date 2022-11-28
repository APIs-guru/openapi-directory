from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


GET_ACCOUNT_BALANCE_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class GetAccountBalanceQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountBalanceRequest:
    query_params: GetAccountBalanceQueryParams = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetAccountBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_authentication_failed_account_balance: Optional[shared.ErrorAuthenticationFailedAccountBalance] = field(default=None)
    account_balance: Optional[shared.AccountBalance] = field(default=None)
    
