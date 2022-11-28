from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    spec_update_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    spec_update_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest:
    path_params: PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams = field()
    request: Optional[PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequests] = field(default=None)
    

@dataclass
class PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_http_status_vo: Optional[Any] = field(default=None)
    
