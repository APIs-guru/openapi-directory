from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamTemplateListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamTemplateListRequest:
    path_params: GetTeamTemplateListPathParams = field()
    

@dataclass
class GetTeamTemplateListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    team_template_list_vo: Optional[Any] = field(default=None)
    
