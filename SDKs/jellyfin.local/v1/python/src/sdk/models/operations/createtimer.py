from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTimerRequestsInput:
    timer_info_dto: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    timer_info_dto1: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    timer_info_dto2: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateTimerRequest:
    security: CreateTimerSecurity = field()
    request: Optional[CreateTimerRequestsInput] = field(default=None)
    

@dataclass
class CreateTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
