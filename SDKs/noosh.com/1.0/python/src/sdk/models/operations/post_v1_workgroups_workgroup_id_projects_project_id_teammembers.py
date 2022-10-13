from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    contact_user_vo: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    contact_user_vo1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    

@dataclass
class PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequest:
    path_params: PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersPathParams = field(default=None)
    request: Optional[PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequests] = field(default=None)
    

@dataclass
class PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    team_member_base_inf_vo: Optional[Any] = field(default=None)
    
