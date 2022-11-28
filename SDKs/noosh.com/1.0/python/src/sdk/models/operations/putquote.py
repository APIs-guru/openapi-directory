from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutQuotePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    quote_id: str = field(metadata={'path_param': { 'field_name': 'quote_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutQuoteRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    quote_put_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    quote_put_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PutQuoteRequest:
    path_params: PutQuotePathParams = field()
    request: Optional[PutQuoteRequests] = field(default=None)
    

@dataclass
class PutQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
