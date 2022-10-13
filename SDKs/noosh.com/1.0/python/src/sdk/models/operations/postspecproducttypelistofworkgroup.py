from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostSpecProductTypeListOfWorkgroupPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSpecProductTypeListOfWorkgroupRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    wg_spec_prd_type_reg_persist_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    wg_spec_prd_type_reg_persist_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    

@dataclass
class PostSpecProductTypeListOfWorkgroupRequest:
    path_params: PostSpecProductTypeListOfWorkgroupPathParams = field(default=None)
    request: Optional[PostSpecProductTypeListOfWorkgroupRequests] = field(default=None)
    

@dataclass
class PostSpecProductTypeListOfWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    wg_spec_prd_type_reg_persist_vo: Optional[Any] = field(default=None)
    
