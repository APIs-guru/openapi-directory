from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
GET_ACCOUNT_BALANCE_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class GetAccountBalanceQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountBalanceRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetAccountBalanceQueryParams = field(default=None)
    

@dataclass
class GetAccountBalanceResponses:
    error_authentication_failed_account_balance: Optional[shared.ErrorAuthenticationFailedAccountBalance] = field(default=None)
    raw_response: bytes = field(default=None)
    account_balance: Optional[shared.AccountBalance] = field(default=None)
    

@dataclass
class GetAccountBalanceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, GetAccountBalanceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
