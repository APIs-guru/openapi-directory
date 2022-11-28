from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProjectHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProjectRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    project: Optional[shared.ProjectInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    project1: Optional[shared.ProjectInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    project2: Optional[shared.ProjectInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateProjectRequest:
    headers: UpdateProjectHeaders = field()
    path_params: UpdateProjectPathParams = field()
    request: UpdateProjectRequestsInput = field()
    

@dataclass
class UpdateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    
