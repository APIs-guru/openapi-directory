from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CalendarsIDRecoverPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CalendarsIDRecoverRequest:
    path_params: PutSetupV1CalendarsIDRecoverPathParams = field()
    

@dataclass
class PutSetupV1CalendarsIDRecoverResponse:
    content_type: str = field()
    status_code: int = field()
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    
