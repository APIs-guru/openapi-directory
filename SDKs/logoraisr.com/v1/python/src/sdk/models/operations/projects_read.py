from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProjectsReadPathParams:
    project_number: str = field(default=None, metadata={'path_param': { 'field_name': 'project_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProjectsReadRequest:
    path_params: ProjectsReadPathParams = field(default=None)
    

@dataclass
class ProjectsReadResponse:
    content_type: str = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    status_code: int = field(default=None)
    
