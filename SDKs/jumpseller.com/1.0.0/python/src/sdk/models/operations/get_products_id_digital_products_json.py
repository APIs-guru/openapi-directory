from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDDigitalProductsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDDigitalProductsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDDigitalProductsJSONRequest:
    path_params: GetProductsIDDigitalProductsJSONPathParams = field()
    query_params: GetProductsIDDigitalProductsJSONQueryParams = field()
    

@dataclass
class GetProductsIDDigitalProductsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    digital_products: Optional[List[shared.DigitalProduct]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
