from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDDigitalProductsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDDigitalProductsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDDigitalProductsJSONRequest:
    path_params: PostProductsIDDigitalProductsJSONPathParams = field()
    query_params: PostProductsIDDigitalProductsJSONQueryParams = field()
    request: shared.DigitalProductEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDDigitalProductsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    digital_product: Optional[shared.DigitalProduct] = field(default=None)
    
