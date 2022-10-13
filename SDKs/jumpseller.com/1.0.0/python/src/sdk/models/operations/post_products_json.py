from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsJSONRequest:
    query_params: PostProductsJSONQueryParams = field(default=None)
    request: shared.ProductEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsJSONResponse:
    content_type: str = field(default=None)
    product: Optional[shared.Product] = field(default=None)
    status_code: int = field(default=None)
    
