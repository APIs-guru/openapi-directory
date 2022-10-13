from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductModulePathParams:
    product_module_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProductModuleRequest:
    path_params: GetProductModulePathParams = field(default=None)
    security: GetProductModuleSecurity = field(default=None)
    

@dataclass
class GetProductModuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
