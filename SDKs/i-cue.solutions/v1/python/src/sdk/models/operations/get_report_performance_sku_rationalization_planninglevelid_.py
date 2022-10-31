from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams:
    planning_level_id: int = field(default=None, metadata={'path_param': { 'field_name': 'planningLevelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDRequest:
    path_params: GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams = field(default=None)
    headers: GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders = field(default=None)
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    portfolio_models: Optional[List[shared.PortfolioModel]] = field(default=None)
    status_code: int = field(default=None)
    
