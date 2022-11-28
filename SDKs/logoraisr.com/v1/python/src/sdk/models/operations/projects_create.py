from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsCreateRequest:
    request: shared.ProjectRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    project_response: Optional[shared.ProjectResponse] = field(default=None)
    
