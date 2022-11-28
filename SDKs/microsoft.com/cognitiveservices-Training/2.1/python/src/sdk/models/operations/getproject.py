from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectRequest:
    headers: GetProjectHeaders = field()
    path_params: GetProjectPathParams = field()
    

@dataclass
class GetProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    
