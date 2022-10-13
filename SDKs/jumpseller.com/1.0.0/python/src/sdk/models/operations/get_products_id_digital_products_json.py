from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDDigitalProductsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDDigitalProductsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDDigitalProductsJSONRequest:
    path_params: GetProductsIDDigitalProductsJSONPathParams = field(default=None)
    query_params: GetProductsIDDigitalProductsJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDDigitalProductsJSONResponse:
    content_type: str = field(default=None)
    digital_products: Optional[List[shared.DigitalProduct]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
