from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


TOP_UP_ACCOUNT_BALANCE_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class TopUpAccountBalanceQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class TopUpAccountBalanceRequest:
    query_params: TopUpAccountBalanceQueryParams = field()
    request: shared.TopupRequest = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class TopUpAccountBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    success: Optional[shared.Success] = field(default=None)
    top_up_account_balance_401_application_json_one_of: Optional[Any] = field(default=None)
    
