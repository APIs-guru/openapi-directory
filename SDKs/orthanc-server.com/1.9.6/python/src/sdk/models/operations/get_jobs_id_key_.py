from dataclasses import dataclass, field



@dataclass
class GetJobsIDKeyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobsIDKeyRequest:
    path_params: GetJobsIDKeyPathParams = field(default=None)
    

@dataclass
class GetJobsIDKeyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
