from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPlanningLevelOrganizationHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPlanningLevelOrganizationRequest:
    headers: GetReportPlanningLevelOrganizationHeaders = field()
    

@dataclass
class GetReportPlanningLevelOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
