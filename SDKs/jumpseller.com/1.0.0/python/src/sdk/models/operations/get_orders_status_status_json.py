from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetOrdersStatusStatusJSONStatusEnum(str, Enum):
    ABANDONED = "Abandoned"
    CANCELED = "Canceled"
    PENDING_PAYMENT = "Pending Payment"
    PAID = "Paid"


@dataclass
class GetOrdersStatusStatusJSONPathParams:
    status: GetOrdersStatusStatusJSONStatusEnum = field(metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersStatusStatusJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersStatusStatusJSONRequest:
    path_params: GetOrdersStatusStatusJSONPathParams = field()
    query_params: GetOrdersStatusStatusJSONQueryParams = field()
    

@dataclass
class GetOrdersStatusStatusJSONResponse:
    content_type: str = field()
    status_code: int = field()
    orders: Optional[List[shared.Order]] = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
