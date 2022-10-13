from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDFieldsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDFieldsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDFieldsJSONRequest:
    path_params: GetProductsIDFieldsJSONPathParams = field(default=None)
    query_params: GetProductsIDFieldsJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDFieldsJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product_custom_fields: Optional[List[shared.ProductCustomField]] = field(default=None)
    status_code: int = field(default=None)
    
