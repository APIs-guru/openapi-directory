from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CalendarsBlockIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CalendarsBlockIDRequest:
    path_params: DeleteSetupV1CalendarsBlockIDPathParams = field()
    

@dataclass
class DeleteSetupV1CalendarsBlockIDResponse:
    content_type: str = field()
    status_code: int = field()
    calendar_block_view_model: Optional[shared.CalendarBlockViewModel] = field(default=None)
    
