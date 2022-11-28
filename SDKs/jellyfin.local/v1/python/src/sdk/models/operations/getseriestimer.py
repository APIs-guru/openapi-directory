from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSeriesTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSeriesTimerRequest:
    path_params: GetSeriesTimerPathParams = field()
    security: GetSeriesTimerSecurity = field()
    

@dataclass
class GetSeriesTimerResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None)
    
