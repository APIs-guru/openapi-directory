from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetOrdersOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass
class GetOrdersQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_status: Optional[GetOrdersOrderStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = field()
    

@dataclass
class GetOrdersResponse:
    content_type: str = field()
    status_code: int = field()
    list_of_orders: Optional[shared.ListOfOrders] = field(default=None)
    
