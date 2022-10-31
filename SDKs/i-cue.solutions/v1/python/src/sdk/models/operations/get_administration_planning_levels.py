from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdministrationPlanningLevelsHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationPlanningLevelsRequest:
    headers: GetAdministrationPlanningLevelsHeaders = field(default=None)
    

@dataclass
class GetAdministrationPlanningLevelsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    planning_level_info_responses: Optional[List[shared.PlanningLevelInfoResponse]] = field(default=None)
    status_code: int = field(default=None)
    
