from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProjectHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProjectRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    project: Optional[shared.Project] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    project1: Optional[shared.Project] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    project2: Optional[shared.Project] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UpdateProjectRequest:
    path_params: UpdateProjectPathParams = field(default=None)
    headers: UpdateProjectHeaders = field(default=None)
    request: UpdateProjectRequests = field(default=None)
    

@dataclass
class UpdateProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    status_code: int = field(default=None)
    
