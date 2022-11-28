from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductModulePathParams:
    product_module_number: str = field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProductModuleRequest:
    path_params: GetProductModulePathParams = field()
    security: GetProductModuleSecurity = field()
    

@dataclass
class GetProductModuleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
