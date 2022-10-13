from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CalendarsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CalendarsIDRequests:
    schedule_update_model: Optional[shared.ScheduleUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_update_model1: Optional[shared.ScheduleUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_update_model2: Optional[shared.ScheduleUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_update_model3: Optional[shared.ScheduleUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1CalendarsIDRequest:
    path_params: PutSetupV1CalendarsIDPathParams = field(default=None)
    request: Optional[PutSetupV1CalendarsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1CalendarsIDResponse:
    content_type: str = field(default=None)
    schedule_view_model: Optional[shared.ScheduleViewModel] = field(default=None)
    status_code: int = field(default=None)
    
