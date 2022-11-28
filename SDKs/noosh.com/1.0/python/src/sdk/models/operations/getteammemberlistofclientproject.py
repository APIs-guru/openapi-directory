from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamMemberListOfClientProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMemberListOfClientProjectRequest:
    path_params: GetTeamMemberListOfClientProjectPathParams = field()
    

@dataclass
class GetTeamMemberListOfClientProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    team_member_list_vo: Optional[Any] = field(default=None)
    
