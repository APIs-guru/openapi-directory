from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ServicesCalendarIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesCalendarIDRequest:
    path_params: DeleteSetupV1ServicesCalendarIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ServicesCalendarIDResponse:
    content_type: str = field(default=None)
    service_calendar_view_model: Optional[shared.ServiceCalendarViewModel] = field(default=None)
    status_code: int = field(default=None)
    
