from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTimerPathParams:
    timer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTimerRequest:
    path_params: GetTimerPathParams = field(default=None)
    security: GetTimerSecurity = field(default=None)
    

@dataclass
class GetTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timer_info_dto: Optional[shared.TimerInfoDto] = field(default=None)
    
