from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1CalendarsBlockIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1CalendarsBlockIDRequests:
    calendar_block_input_model: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    calendar_block_input_model1: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    calendar_block_input_model2: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    calendar_block_input_model3: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1CalendarsBlockIDRequest:
    path_params: PutSetupV1CalendarsBlockIDPathParams = field(default=None)
    request: Optional[PutSetupV1CalendarsBlockIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1CalendarsBlockIDResponse:
    calendar_block_view_model: Optional[shared.CalendarBlockViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
