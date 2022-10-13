from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamTemplateDetailPathParams:
    team_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_template_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamTemplateDetailRequest:
    path_params: GetTeamTemplateDetailPathParams = field(default=None)
    

@dataclass
class GetTeamTemplateDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    team_template_expand_vo: Optional[Any] = field(default=None)
    
