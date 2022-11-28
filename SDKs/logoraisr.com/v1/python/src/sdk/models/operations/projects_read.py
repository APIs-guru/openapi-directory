from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsReadPathParams:
    project_number: str = field(metadata={'path_param': { 'field_name': 'project_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsReadRequest:
    path_params: ProjectsReadPathParams = field()
    

@dataclass
class ProjectsReadResponse:
    content_type: str = field()
    status_code: int = field()
    project: Optional[shared.Project] = field(default=None)
    
