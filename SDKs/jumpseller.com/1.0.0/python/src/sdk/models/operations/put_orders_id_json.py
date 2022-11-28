from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutOrdersIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutOrdersIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutOrdersIDJSONRequest:
    path_params: PutOrdersIDJSONPathParams = field()
    query_params: PutOrdersIDJSONQueryParams = field()
    request: shared.OrderEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOrdersIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    order: Optional[shared.Order] = field(default=None)
    
