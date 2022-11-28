from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOperationPathParams:
    operation_id: int = field(metadata={'path_param': { 'field_name': 'operation-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOperationSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetOperationRequest:
    path_params: GetOperationPathParams = field()
    security: GetOperationSecurity = field()
    

@dataclass
class GetOperationResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
