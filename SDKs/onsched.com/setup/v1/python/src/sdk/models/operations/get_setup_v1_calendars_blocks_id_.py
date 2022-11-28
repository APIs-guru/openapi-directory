from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CalendarsBlocksIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CalendarsBlocksIDRequest:
    path_params: GetSetupV1CalendarsBlocksIDPathParams = field()
    

@dataclass
class GetSetupV1CalendarsBlocksIDResponse:
    content_type: str = field()
    status_code: int = field()
    calendar_block_view_model: Optional[shared.CalendarBlockViewModel] = field(default=None)
    
