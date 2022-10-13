from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductNumberPathParams:
    product_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNumberSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ProductNumberRequest:
    path_params: ProductNumberPathParams = field(default=None)
    security: ProductNumberSecurity = field(default=None)
    

@dataclass
class ProductNumberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
