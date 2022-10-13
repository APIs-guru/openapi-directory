from dataclasses import dataclass, field



@dataclass
class GetWorkerArchitectureNameWorkerIDPathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    worker_id: str = field(default=None, metadata={'path_param': { 'field_name': 'worker_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkerArchitectureNameWorkerIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkerArchitectureNameWorkerIDRequest:
    path_params: GetWorkerArchitectureNameWorkerIDPathParams = field(default=None)
    security: GetWorkerArchitectureNameWorkerIDSecurity = field(default=None)
    

@dataclass
class GetWorkerArchitectureNameWorkerIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
