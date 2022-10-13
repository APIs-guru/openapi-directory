from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CalendarsBlockIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CalendarsBlockIDRequest:
    path_params: DeleteSetupV1CalendarsBlockIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1CalendarsBlockIDResponse:
    calendar_block_view_model: Optional[shared.CalendarBlockViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
