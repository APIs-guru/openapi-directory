from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsOptionIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDJSONRequest:
    path_params: GetProductsIDOptionsOptionIDJSONPathParams = field()
    query_params: GetProductsIDOptionsOptionIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDOptionsOptionIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_option: Optional[shared.ProductOption] = field(default=None)
    
