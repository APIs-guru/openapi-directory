from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostTeamMemberOfProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamMemberOfProjectRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    application_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    team_member_po: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    team_member_po1: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-json-smile' }})
    text_csv: bytes = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    text_x_yaml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-yaml' }})
    

@dataclass
class PostTeamMemberOfProjectRequest:
    path_params: PostTeamMemberOfProjectPathParams = field(default=None)
    request: Optional[PostTeamMemberOfProjectRequests] = field(default=None)
    

@dataclass
class PostTeamMemberOfProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    v1x1_invited_team_member_results_vo: Optional[Any] = field(default=None)
    
