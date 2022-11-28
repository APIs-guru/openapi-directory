from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutSpecPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSpecRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    v1_x1_spec_updating_po: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    v1_x1_spec_updating_po1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PutSpecRequest:
    path_params: PutSpecPathParams = field()
    request: Optional[PutSpecRequests] = field(default=None)
    

@dataclass
class PutSpecResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_http_status_vo: Optional[Any] = field(default=None)
    
