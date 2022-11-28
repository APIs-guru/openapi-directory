from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteProjectPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = field()
    security: DeleteProjectSecurity = field()
    

@dataclass
class DeleteProjectResponse:
    content_type: str = field()
    status_code: int = field()
    project_details: Optional[shared.ProjectDetails] = field(default=None)
    
