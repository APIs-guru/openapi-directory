from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsIDOptionsOptionIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONRequest:
    path_params: PutProductsIDOptionsOptionIDJSONPathParams = field(default=None)
    query_params: PutProductsIDOptionsOptionIDJSONQueryParams = field(default=None)
    request: shared.ProductOptionEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_option: Optional[shared.ProductOption] = field(default=None)
    status_code: int = field(default=None)
    
