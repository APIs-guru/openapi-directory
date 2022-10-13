from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = field(default=None)
    security: GetProjectSecurity = field(default=None)
    

@dataclass
class GetProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    project_details: Optional[shared.ProjectDetails] = field(default=None)
    
