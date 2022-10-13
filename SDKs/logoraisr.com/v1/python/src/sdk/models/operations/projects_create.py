from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsCreateRequest:
    request: shared.ProjectRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProjectsCreateResponse:
    content_type: str = field(default=None)
    project_response: Optional[shared.ProjectResponse] = field(default=None)
    status_code: int = field(default=None)
    
