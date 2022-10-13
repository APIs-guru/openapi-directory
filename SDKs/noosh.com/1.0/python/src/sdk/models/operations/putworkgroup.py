from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutWorkgroupPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWorkgroupRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    workgroup_upd_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    workgroup_upd_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PutWorkgroupRequest:
    path_params: PutWorkgroupPathParams = field(default=None)
    request: Optional[PutWorkgroupRequests] = field(default=None)
    

@dataclass
class PutWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    workgroup_http_status_vo: Optional[Any] = field(default=None)
    
