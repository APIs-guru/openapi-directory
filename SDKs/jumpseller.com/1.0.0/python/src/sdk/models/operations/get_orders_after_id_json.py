from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetOrdersAfterIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersAfterIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersAfterIDJSONRequest:
    path_params: GetOrdersAfterIDJSONPathParams = field()
    query_params: GetOrdersAfterIDJSONQueryParams = field()
    

@dataclass
class GetOrdersAfterIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    order: Optional[shared.Order] = field(default=None)
    
