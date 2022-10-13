from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsOptionIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDJSONRequest:
    path_params: GetProductsIDOptionsOptionIDJSONPathParams = field(default=None)
    query_params: GetProductsIDOptionsOptionIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDOptionsOptionIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_option: Optional[shared.ProductOption] = field(default=None)
    status_code: int = field(default=None)
    
