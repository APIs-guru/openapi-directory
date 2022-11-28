from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSpecProductTypeListOfWorkgroupPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSpecProductTypeListOfWorkgroupRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(metadata={'request': { 'media_type': 'text/x-yaml' }})
    wg_spec_prd_type_reg_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    wg_spec_prd_type_reg_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PostSpecProductTypeListOfWorkgroupRequest:
    path_params: PostSpecProductTypeListOfWorkgroupPathParams = field()
    request: Optional[PostSpecProductTypeListOfWorkgroupRequests] = field(default=None)
    

@dataclass
class PostSpecProductTypeListOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    wg_spec_prd_type_reg_persist_vo: Optional[Any] = field(default=None)
    
