from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsJSONRequest:
    path_params: GetProductsIDOptionsJSONPathParams = field()
    query_params: GetProductsIDOptionsJSONQueryParams = field()
    

@dataclass
class GetProductsIDOptionsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_options: Optional[List[shared.ProductOption]] = field(default=None)
    
