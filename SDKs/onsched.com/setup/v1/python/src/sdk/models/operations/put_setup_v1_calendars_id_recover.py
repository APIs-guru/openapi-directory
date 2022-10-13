from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CalendarsIDRecoverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CalendarsIDRecoverRequest:
    path_params: PutSetupV1CalendarsIDRecoverPathParams = field(default=None)
    

@dataclass
class PutSetupV1CalendarsIDRecoverResponse:
    content_type: str = field(default=None)
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    status_code: int = field(default=None)
    
