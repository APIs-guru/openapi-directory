from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = field(default=None)
    headers: GetProjectHeaders = field(default=None)
    

@dataclass
class GetProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    status_code: int = field(default=None)
    
