from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectsRequest:
    headers: GetProjectsHeaders = field()
    

@dataclass
class GetProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    
