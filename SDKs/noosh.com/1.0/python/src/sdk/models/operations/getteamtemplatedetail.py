from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamTemplateDetailPathParams:
    team_template_id: str = field(metadata={'path_param': { 'field_name': 'team_template_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamTemplateDetailRequest:
    path_params: GetTeamTemplateDetailPathParams = field()
    

@dataclass
class GetTeamTemplateDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    team_template_expand_vo: Optional[Any] = field(default=None)
    
