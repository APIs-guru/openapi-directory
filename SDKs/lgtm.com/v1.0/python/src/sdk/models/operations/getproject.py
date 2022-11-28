from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = field()
    security: GetProjectSecurity = field()
    

@dataclass
class GetProjectResponse:
    content_type: str = field()
    status_code: int = field()
    project_details: Optional[shared.ProjectDetails] = field(default=None)
    
