from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteProjectPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = field(default=None)
    security: DeleteProjectSecurity = field(default=None)
    

@dataclass
class DeleteProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    project_details: Optional[shared.ProjectDetails] = field(default=None)
    
