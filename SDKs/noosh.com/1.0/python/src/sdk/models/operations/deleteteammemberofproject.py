from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteTeamMemberOfProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    teammember_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teammember_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamMemberOfProjectRequest:
    path_params: DeleteTeamMemberOfProjectPathParams = field(default=None)
    

@dataclass
class DeleteTeamMemberOfProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    team_member_base_inf_vo: Optional[Any] = field(default=None)
    
