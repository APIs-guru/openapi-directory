from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutProductsProductIDFieldsFieldIDJSONPathParams:
    field_id: int = field(default=None, metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    product_id: int = field(default=None, metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONRequest:
    path_params: PutProductsProductIDFieldsFieldIDJSONPathParams = field(default=None)
    query_params: PutProductsProductIDFieldsFieldIDJSONQueryParams = field(default=None)
    

@dataclass
class PutProductsProductIDFieldsFieldIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_custom_field: Optional[shared.ProductCustomField] = field(default=None)
    status_code: int = field(default=None)
    
