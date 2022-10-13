from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetProjectsRequest:
    headers: GetProjectsHeaders = field(default=None)
    

@dataclass
class GetProjectsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    status_code: int = field(default=None)
    
