from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountOrdersPathParams:
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountOrdersRequest:
    path_params: GetAccountsAccountOrdersPathParams = field()
    

@dataclass
class GetAccountsAccountOrdersResponse:
    content_type: str = field()
    status_code: int = field()
    order_states: Optional[List[shared.OrderState]] = field(default=None)
    
