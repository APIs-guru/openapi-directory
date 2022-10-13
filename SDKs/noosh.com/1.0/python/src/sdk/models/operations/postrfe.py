from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRfePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRfeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    rfe_po: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    rfe_po1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    

@dataclass
class PostRfeRequest:
    path_params: PostRfePathParams = field(default=None)
    request: Optional[PostRfeRequests] = field(default=None)
    

@dataclass
class PostRfeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfq_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
