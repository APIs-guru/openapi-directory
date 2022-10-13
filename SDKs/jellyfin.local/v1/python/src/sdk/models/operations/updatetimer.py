from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTimerPathParams:
    timer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTimerRequests:
    timer_info_dto: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    timer_info_dto1: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    timer_info_dto2: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateTimerRequest:
    path_params: UpdateTimerPathParams = field(default=None)
    request: Optional[UpdateTimerRequests] = field(default=None)
    security: UpdateTimerSecurity = field(default=None)
    

@dataclass
class UpdateTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
