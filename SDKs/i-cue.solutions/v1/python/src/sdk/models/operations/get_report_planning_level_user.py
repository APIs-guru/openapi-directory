from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPlanningLevelUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class GetReportPlanningLevelUserRequest:
    headers: GetReportPlanningLevelUserHeaders = field(default=None)
    

@dataclass
class GetReportPlanningLevelUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
