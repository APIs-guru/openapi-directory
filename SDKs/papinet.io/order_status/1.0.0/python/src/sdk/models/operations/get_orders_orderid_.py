from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrdersOrderIDPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDRequest:
    path_params: GetOrdersOrderIDPathParams = field()
    

@dataclass
class GetOrdersOrderIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_order: Optional[shared.GetOrder] = field(default=None)
    
