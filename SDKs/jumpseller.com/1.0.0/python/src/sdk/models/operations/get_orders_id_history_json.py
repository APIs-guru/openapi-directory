from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOrdersIDHistoryJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersIDHistoryJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersIDHistoryJSONRequest:
    path_params: GetOrdersIDHistoryJSONPathParams = field()
    query_params: GetOrdersIDHistoryJSONQueryParams = field()
    

@dataclass
class GetOrdersIDHistoryJSONResponse:
    content_type: str = field()
    status_code: int = field()
    order_histories: Optional[List[shared.OrderHistory]] = field(default=None)
    
