from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetTeamTemplateListPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamTemplateListRequest:
    path_params: GetTeamTemplateListPathParams = field(default=None)
    

@dataclass
class GetTeamTemplateListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    team_template_list_vo: Optional[Any] = field(default=None)
    
