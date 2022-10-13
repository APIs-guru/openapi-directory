from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountOrdersPathParams:
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountOrdersRequest:
    path_params: GetAccountsAccountOrdersPathParams = field(default=None)
    

@dataclass
class GetAccountsAccountOrdersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    order_states: Optional[List[shared.OrderState]] = field(default=None)
    
