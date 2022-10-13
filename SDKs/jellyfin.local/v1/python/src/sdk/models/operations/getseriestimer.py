from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSeriesTimerPathParams:
    timer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSeriesTimerRequest:
    path_params: GetSeriesTimerPathParams = field(default=None)
    security: GetSeriesTimerSecurity = field(default=None)
    

@dataclass
class GetSeriesTimerResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None)
    status_code: int = field(default=None)
    
