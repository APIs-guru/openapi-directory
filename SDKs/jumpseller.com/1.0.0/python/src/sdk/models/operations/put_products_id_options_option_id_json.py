from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsIDOptionsOptionIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONRequest:
    path_params: PutProductsIDOptionsOptionIDJSONPathParams = field()
    query_params: PutProductsIDOptionsOptionIDJSONQueryParams = field()
    request: shared.ProductOptionEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProductsIDOptionsOptionIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_option: Optional[shared.ProductOption] = field(default=None)
    
