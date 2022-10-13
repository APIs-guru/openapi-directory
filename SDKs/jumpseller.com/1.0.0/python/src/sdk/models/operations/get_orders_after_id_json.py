from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetOrdersAfterIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrdersAfterIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrdersAfterIDJSONRequest:
    path_params: GetOrdersAfterIDJSONPathParams = field(default=None)
    query_params: GetOrdersAfterIDJSONQueryParams = field(default=None)
    

@dataclass
class GetOrdersAfterIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    order: Optional[shared.Order] = field(default=None)
    status_code: int = field(default=None)
    
