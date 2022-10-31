from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPlanningLevelOrganizationHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPlanningLevelOrganizationRequest:
    headers: GetReportPlanningLevelOrganizationHeaders = field(default=None)
    

@dataclass
class GetReportPlanningLevelOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
