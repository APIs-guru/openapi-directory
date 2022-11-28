from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdministrationPlanningLevelsHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationPlanningLevelsRequest:
    headers: GetAdministrationPlanningLevelsHeaders = field()
    

@dataclass
class GetAdministrationPlanningLevelsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    planning_level_info_responses: Optional[List[shared.PlanningLevelInfoResponse]] = field(default=None)
    
