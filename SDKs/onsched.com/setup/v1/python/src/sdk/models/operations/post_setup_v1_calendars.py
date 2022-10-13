from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CalendarsRequests:
    schedule_input_model: Optional[shared.ScheduleInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_input_model1: Optional[shared.ScheduleInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_input_model2: Optional[shared.ScheduleInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_input_model3: Optional[shared.ScheduleInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CalendarsRequest:
    request: Optional[PostSetupV1CalendarsRequests] = field(default=None)
    

@dataclass
class PostSetupV1CalendarsResponse:
    content_type: str = field(default=None)
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    status_code: int = field(default=None)
    
