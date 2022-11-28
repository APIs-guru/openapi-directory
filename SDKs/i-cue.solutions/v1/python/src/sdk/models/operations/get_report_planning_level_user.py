from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPlanningLevelUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPlanningLevelUserRequest:
    headers: GetReportPlanningLevelUserHeaders = field()
    

@dataclass
class GetReportPlanningLevelUserResponse:
    content_type: str = field()
    status_code: int = field()
    
