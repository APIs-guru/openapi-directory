from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetOrdersStatusStatusJSONStatusEnum(str, Enum):
    ABANDONED = "Abandoned"
    CANCELED = "Canceled"
    PENDING_PAYMENT = "Pending Payment"
    PAID = "Paid"


@dataclass
class GetOrdersStatusStatusJSONPathParams:
    status: GetOrdersStatusStatusJSONStatusEnum = field(default=None, metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersStatusStatusJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersStatusStatusJSONRequest:
    path_params: GetOrdersStatusStatusJSONPathParams = field(default=None)
    query_params: GetOrdersStatusStatusJSONQueryParams = field(default=None)
    

@dataclass
class GetOrdersStatusStatusJSONResponse:
    content_type: str = field(default=None)
    orders: Optional[List[shared.Order]] = field(default=None)
    status_code: int = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
