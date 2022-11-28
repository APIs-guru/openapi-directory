from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CancelTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CancelTimerRequest:
    path_params: CancelTimerPathParams = field()
    security: CancelTimerSecurity = field()
    

@dataclass
class CancelTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
