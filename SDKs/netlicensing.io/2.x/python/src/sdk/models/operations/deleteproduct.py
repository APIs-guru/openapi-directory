from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteProductPathParams:
    product_number: str = field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = field()
    query_params: DeleteProductQueryParams = field()
    security: DeleteProductSecurity = field()
    

@dataclass
class DeleteProductResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
