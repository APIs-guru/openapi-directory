from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTimerRequestsInput:
    timer_info_dto: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    timer_info_dto1: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    timer_info_dto2: Optional[shared.TimerInfoDtoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateTimerRequest:
    path_params: UpdateTimerPathParams = field()
    security: UpdateTimerSecurity = field()
    request: Optional[UpdateTimerRequestsInput] = field(default=None)
    

@dataclass
class UpdateTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
