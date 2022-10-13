from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrdersOrderIDPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersOrderIDRequest:
    path_params: GetOrdersOrderIDPathParams = field(default=None)
    

@dataclass
class GetOrdersOrderIDResponse:
    content_type: str = field(default=None)
    get_order: Optional[shared.GetOrder] = field(default=None)
    status_code: int = field(default=None)
    
