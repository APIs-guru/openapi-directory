from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONPathParams:
    field_id: int = field(default=None, metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    product_id: int = field(default=None, metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONRequest:
    path_params: DeleteProductsProductIDFieldsFieldIDJSONPathParams = field(default=None)
    query_params: DeleteProductsProductIDFieldsFieldIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteProductsProductIDFieldsFieldIDJSONResponse:
    content_type: str = field(default=None)
    message_object: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
