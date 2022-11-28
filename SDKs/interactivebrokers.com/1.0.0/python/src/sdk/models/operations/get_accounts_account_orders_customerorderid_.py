from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountOrdersCustomerOrderIDPathParams:
    customer_order_id: str = field(metadata={'path_param': { 'field_name': 'CustomerOrderId', 'style': 'simple', 'explode': False }})
    account: str = field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountOrdersCustomerOrderIDRequest:
    path_params: GetAccountsAccountOrdersCustomerOrderIDPathParams = field()
    

@dataclass
class GetAccountsAccountOrdersCustomerOrderIDResponse:
    content_type: str = field()
    status_code: int = field()
    order_states: Optional[List[shared.OrderState]] = field(default=None)
    
