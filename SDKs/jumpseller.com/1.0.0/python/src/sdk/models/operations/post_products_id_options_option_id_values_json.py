from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDOptionsOptionIDValuesJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDOptionsOptionIDValuesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDOptionsOptionIDValuesJSONRequest:
    path_params: PostProductsIDOptionsOptionIDValuesJSONPathParams = field()
    query_params: PostProductsIDOptionsOptionIDValuesJSONQueryParams = field()
    request: shared.ProductOptionValueEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDOptionsOptionIDValuesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    product_option_value: Optional[shared.ProductOptionValue] = field(default=None)
    
