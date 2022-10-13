from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsOptionIDValuesJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONRequest:
    path_params: GetProductsIDOptionsOptionIDValuesJSONPathParams = field(default=None)
    query_params: GetProductsIDOptionsOptionIDValuesJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_option_values: Optional[List[shared.ProductOptionValue]] = field(default=None)
    status_code: int = field(default=None)
    
