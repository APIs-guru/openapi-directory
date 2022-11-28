from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsOptionIDValuesJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONRequest:
    path_params: GetProductsIDOptionsOptionIDValuesJSONPathParams = field()
    query_params: GetProductsIDOptionsOptionIDValuesJSONQueryParams = field()
    

@dataclass
class GetProductsIDOptionsOptionIDValuesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_option_values: Optional[List[shared.ProductOptionValue]] = field(default=None)
    
