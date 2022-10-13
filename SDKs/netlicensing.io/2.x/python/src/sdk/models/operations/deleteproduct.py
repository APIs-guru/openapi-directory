from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductPathParams:
    product_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = field(default=None)
    query_params: DeleteProductQueryParams = field(default=None)
    security: DeleteProductSecurity = field(default=None)
    

@dataclass
class DeleteProductResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
