from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTimerRequests:
    timer_info_dto: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    timer_info_dto1: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    timer_info_dto2: Optional[shared.TimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateTimerRequest:
    request: Optional[CreateTimerRequests] = field(default=None)
    security: CreateTimerSecurity = field(default=None)
    

@dataclass
class CreateTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
