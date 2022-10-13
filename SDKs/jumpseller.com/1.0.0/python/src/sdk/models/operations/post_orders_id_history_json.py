from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOrdersIDHistoryJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOrdersIDHistoryJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOrdersIDHistoryJSONRequest:
    path_params: PostOrdersIDHistoryJSONPathParams = field(default=None)
    query_params: PostOrdersIDHistoryJSONQueryParams = field(default=None)
    request: shared.OrderHistoryEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOrdersIDHistoryJSONResponse:
    content_type: str = field(default=None)
    order_history: Optional[shared.OrderHistory] = field(default=None)
    status_code: int = field(default=None)
    
