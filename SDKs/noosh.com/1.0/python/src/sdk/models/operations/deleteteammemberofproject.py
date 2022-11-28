from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteTeamMemberOfProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    teammember_id: str = field(metadata={'path_param': { 'field_name': 'teammember_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamMemberOfProjectRequest:
    path_params: DeleteTeamMemberOfProjectPathParams = field()
    

@dataclass
class DeleteTeamMemberOfProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    team_member_base_inf_vo: Optional[Any] = field(default=None)
    
