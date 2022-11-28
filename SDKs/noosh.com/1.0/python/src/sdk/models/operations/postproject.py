from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostProjectPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProjectRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    project_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    project_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PostProjectRequest:
    path_params: PostProjectPathParams = field()
    request: Optional[PostProjectRequests] = field(default=None)
    

@dataclass
class PostProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    project_vo: Optional[Any] = field(default=None)
    
