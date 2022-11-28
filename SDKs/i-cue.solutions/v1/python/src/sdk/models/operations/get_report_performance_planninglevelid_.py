from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportPerformancePlanningLevelIDPathParams:
    planning_level_id: str = field(metadata={'path_param': { 'field_name': 'planningLevelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformancePlanningLevelIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformancePlanningLevelIDRequest:
    headers: GetReportPerformancePlanningLevelIDHeaders = field()
    path_params: GetReportPerformancePlanningLevelIDPathParams = field()
    

@dataclass
class GetReportPerformancePlanningLevelIDResponse:
    content_type: str = field()
    status_code: int = field()
    
