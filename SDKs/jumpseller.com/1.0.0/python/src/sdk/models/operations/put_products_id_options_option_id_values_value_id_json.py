from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsIDOptionsOptionIDValuesValueIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    value_id: int = field(metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsIDOptionsOptionIDValuesValueIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsIDOptionsOptionIDValuesValueIDJSONRequest:
    path_params: PutProductsIDOptionsOptionIDValuesValueIDJSONPathParams = field()
    query_params: PutProductsIDOptionsOptionIDValuesValueIDJSONQueryParams = field()
    request: shared.ProductOptionValueEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProductsIDOptionsOptionIDValuesValueIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_option_value: Optional[shared.ProductOptionValue] = field(default=None)
    
