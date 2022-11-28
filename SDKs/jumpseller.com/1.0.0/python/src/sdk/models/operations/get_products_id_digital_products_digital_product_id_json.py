from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONPathParams:
    digital_product_id: int = field(metadata={'path_param': { 'field_name': 'digital_product_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONRequest:
    path_params: GetProductsIDDigitalProductsDigitalProductIDJSONPathParams = field()
    query_params: GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDDigitalProductsDigitalProductIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    digital_product: Optional[shared.DigitalProduct] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
