from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTimerRequest:
    path_params: GetTimerPathParams = field()
    security: GetTimerSecurity = field()
    

@dataclass
class GetTimerResponse:
    content_type: str = field()
    status_code: int = field()
    timer_info_dto: Optional[shared.TimerInfoDto] = field(default=None)
    
