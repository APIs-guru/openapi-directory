from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDDigitalProductsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDDigitalProductsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDDigitalProductsJSONRequest:
    path_params: PostProductsIDDigitalProductsJSONPathParams = field(default=None)
    query_params: PostProductsIDDigitalProductsJSONQueryParams = field(default=None)
    request: shared.DigitalProductEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDDigitalProductsJSONResponse:
    content_type: str = field(default=None)
    digital_product: Optional[shared.DigitalProduct] = field(default=None)
    status_code: int = field(default=None)
    
