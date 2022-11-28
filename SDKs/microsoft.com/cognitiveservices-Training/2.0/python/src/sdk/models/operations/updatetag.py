from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTagPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    tag: Optional[shared.TagInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tag1: Optional[shared.TagInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tag2: Optional[shared.TagInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTagRequest:
    headers: UpdateTagHeaders = field()
    path_params: UpdateTagPathParams = field()
    request: UpdateTagRequestsInput = field()
    

@dataclass
class UpdateTagResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
