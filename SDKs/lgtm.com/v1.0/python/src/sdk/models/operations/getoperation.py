from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOperationPathParams:
    operation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'operation-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOperationSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetOperationRequest:
    path_params: GetOperationPathParams = field(default=None)
    security: GetOperationSecurity = field(default=None)
    

@dataclass
class GetOperationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    
