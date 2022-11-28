from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDOptionsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDOptionsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDOptionsJSONRequest:
    path_params: PostProductsIDOptionsJSONPathParams = field()
    query_params: PostProductsIDOptionsJSONQueryParams = field()
    request: shared.ProductOptionEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDOptionsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    product_option: Optional[shared.ProductOption] = field(default=None)
    
