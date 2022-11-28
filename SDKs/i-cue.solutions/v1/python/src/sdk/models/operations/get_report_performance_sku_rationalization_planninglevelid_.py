from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams:
    planning_level_id: int = field(metadata={'path_param': { 'field_name': 'planningLevelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDRequest:
    headers: GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders = field()
    path_params: GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams = field()
    

@dataclass
class GetReportPerformanceSkuRationalizationPlanningLevelIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    portfolio_models: Optional[List[shared.PortfolioModel]] = field(default=None)
    
