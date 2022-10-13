from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDOptionsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDOptionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDOptionsJSONRequest:
    path_params: PostProductsIDOptionsJSONPathParams = field(default=None)
    query_params: PostProductsIDOptionsJSONQueryParams = field(default=None)
    request: shared.ProductOptionEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDOptionsJSONResponse:
    content_type: str = field(default=None)
    product_option: Optional[shared.ProductOption] = field(default=None)
    status_code: int = field(default=None)
    
