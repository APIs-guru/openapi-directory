from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetJobsIDKeyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobsIDKeyRequest:
    path_params: GetJobsIDKeyPathParams = field()
    

@dataclass
class GetJobsIDKeyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
