from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDJSONRequest:
    path_params: GetProductsIDJSONPathParams = field()
    query_params: GetProductsIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product: Optional[shared.Product] = field(default=None)
    
