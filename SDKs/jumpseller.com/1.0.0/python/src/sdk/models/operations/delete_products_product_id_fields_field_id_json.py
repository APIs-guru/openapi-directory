from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONPathParams:
    field_id: int = field(metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    product_id: int = field(metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONRequest:
    path_params: DeleteProductsProductIDFieldsFieldIDJSONPathParams = field()
    query_params: DeleteProductsProductIDFieldsFieldIDJSONQueryParams = field()
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    message_object: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
