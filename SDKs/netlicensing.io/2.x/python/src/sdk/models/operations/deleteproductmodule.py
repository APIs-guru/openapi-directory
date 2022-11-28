from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteProductModulePathParams:
    product_module_number: str = field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductModuleQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteProductModuleRequest:
    path_params: DeleteProductModulePathParams = field()
    query_params: DeleteProductModuleQueryParams = field()
    security: DeleteProductModuleSecurity = field()
    

@dataclass
class DeleteProductModuleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
