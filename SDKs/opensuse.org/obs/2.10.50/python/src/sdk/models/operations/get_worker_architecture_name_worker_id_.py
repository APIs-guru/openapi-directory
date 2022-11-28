from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkerArchitectureNameWorkerIDPathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    worker_id: str = field(metadata={'path_param': { 'field_name': 'worker_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkerArchitectureNameWorkerIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkerArchitectureNameWorkerIDRequest:
    path_params: GetWorkerArchitectureNameWorkerIDPathParams = field()
    security: GetWorkerArchitectureNameWorkerIDSecurity = field()
    

@dataclass
class GetWorkerArchitectureNameWorkerIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
