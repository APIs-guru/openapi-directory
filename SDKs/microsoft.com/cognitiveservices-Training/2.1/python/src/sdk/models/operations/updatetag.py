from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTagPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    tag: Optional[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tag1: Optional[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tag2: Optional[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UpdateTagRequest:
    path_params: UpdateTagPathParams = field(default=None)
    headers: UpdateTagHeaders = field(default=None)
    request: UpdateTagRequests = field(default=None)
    

@dataclass
class UpdateTagResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
