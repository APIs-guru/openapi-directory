from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductNumberPathParams:
    product_number: str = field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNumberSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ProductNumberRequest:
    path_params: ProductNumberPathParams = field()
    security: ProductNumberSecurity = field()
    

@dataclass
class ProductNumberResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
