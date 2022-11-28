from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOrdersIDHistoryJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersIDHistoryJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOrdersIDHistoryJSONRequest:
    path_params: PostOrdersIDHistoryJSONPathParams = field()
    query_params: PostOrdersIDHistoryJSONQueryParams = field()
    request: shared.OrderHistoryEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOrdersIDHistoryJSONResponse:
    content_type: str = field()
    status_code: int = field()
    order_history: Optional[shared.OrderHistory] = field(default=None)
    
