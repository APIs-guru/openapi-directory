from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CalendarsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CalendarsIDRequest:
    path_params: DeleteSetupV1CalendarsIDPathParams = field()
    

@dataclass
class DeleteSetupV1CalendarsIDResponse:
    content_type: str = field()
    status_code: int = field()
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    
