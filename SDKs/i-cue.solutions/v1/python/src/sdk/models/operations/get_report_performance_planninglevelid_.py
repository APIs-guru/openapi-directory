from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPerformancePlanningLevelIDPathParams:
    planning_level_id: str = field(default=None, metadata={'path_param': { 'field_name': 'planningLevelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformancePlanningLevelIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformancePlanningLevelIDRequest:
    path_params: GetReportPerformancePlanningLevelIDPathParams = field(default=None)
    headers: GetReportPerformancePlanningLevelIDHeaders = field(default=None)
    

@dataclass
class GetReportPerformancePlanningLevelIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
