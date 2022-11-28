from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsProductIDFieldsFieldIDJSONPathParams:
    field_id: int = field(metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    product_id: int = field(metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONRequest:
    path_params: PutProductsProductIDFieldsFieldIDJSONPathParams = field()
    query_params: PutProductsProductIDFieldsFieldIDJSONQueryParams = field()
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_custom_field: Optional[shared.ProductCustomField] = field(default=None)
    
