from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsJSONRequest:
    path_params: GetProductsIDOptionsJSONPathParams = field(default=None)
    query_params: GetProductsIDOptionsJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDOptionsJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_options: Optional[List[shared.ProductOption]] = field(default=None)
    status_code: int = field(default=None)
    
