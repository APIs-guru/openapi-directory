from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProductModulePathParams:
    product_module_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductModuleQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteProductModuleRequest:
    path_params: DeleteProductModulePathParams = field(default=None)
    query_params: DeleteProductModuleQueryParams = field(default=None)
    security: DeleteProductModuleSecurity = field(default=None)
    

@dataclass
class DeleteProductModuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
