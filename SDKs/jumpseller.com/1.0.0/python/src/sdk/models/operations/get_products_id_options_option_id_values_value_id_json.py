from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDOptionsOptionIDValuesValueIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    value_id: int = field(metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesValueIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesValueIDJSONRequest:
    path_params: GetProductsIDOptionsOptionIDValuesValueIDJSONPathParams = field()
    query_params: GetProductsIDOptionsOptionIDValuesValueIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDOptionsOptionIDValuesValueIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_option_value: Optional[shared.ProductOptionValue] = field(default=None)
    
