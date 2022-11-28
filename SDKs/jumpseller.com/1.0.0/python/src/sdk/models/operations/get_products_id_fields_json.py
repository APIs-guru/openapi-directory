from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDFieldsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDFieldsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDFieldsJSONRequest:
    path_params: GetProductsIDFieldsJSONPathParams = field()
    query_params: GetProductsIDFieldsJSONQueryParams = field()
    

@dataclass
class GetProductsIDFieldsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product_custom_fields: Optional[List[shared.ProductCustomField]] = field(default=None)
    
