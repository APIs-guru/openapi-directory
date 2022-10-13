from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CalendarsBlocksIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CalendarsBlocksIDRequest:
    path_params: GetSetupV1CalendarsBlocksIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1CalendarsBlocksIDResponse:
    calendar_block_view_model: Optional[shared.CalendarBlockViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
