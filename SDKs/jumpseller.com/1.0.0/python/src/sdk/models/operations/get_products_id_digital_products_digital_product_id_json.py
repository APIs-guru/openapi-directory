from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONPathParams:
    digital_product_id: int = field(default=None, metadata={'path_param': { 'field_name': 'digital_product_id', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONRequest:
    path_params: GetProductsIDDigitalProductsDigitalProductIDJSONPathParams = field(default=None)
    query_params: GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONResponse:
    content_type: str = field(default=None)
    digital_product: Optional[shared.DigitalProduct] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
