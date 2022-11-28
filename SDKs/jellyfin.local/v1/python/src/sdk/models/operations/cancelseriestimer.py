from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CancelSeriesTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CancelSeriesTimerRequest:
    path_params: CancelSeriesTimerPathParams = field()
    security: CancelSeriesTimerSecurity = field()
    

@dataclass
class CancelSeriesTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
