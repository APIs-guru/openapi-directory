from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesCalendarRequests:
    service_calendar_input_model: Optional[shared.ServiceCalendarInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_calendar_input_model1: Optional[shared.ServiceCalendarInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_calendar_input_model2: Optional[shared.ServiceCalendarInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_calendar_input_model3: Optional[shared.ServiceCalendarInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesCalendarRequest:
    request: Optional[PostSetupV1ServicesCalendarRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesCalendarResponse:
    content_type: str = field(default=None)
    service_calendar_view_model: Optional[shared.ServiceCalendarViewModel] = field(default=None)
    status_code: int = field(default=None)
    
