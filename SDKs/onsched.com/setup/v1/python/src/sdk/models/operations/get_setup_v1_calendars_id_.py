from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CalendarsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CalendarsIDRequest:
    path_params: GetSetupV1CalendarsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1CalendarsIDResponse:
    content_type: str = field(default=None)
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    status_code: int = field(default=None)
    
