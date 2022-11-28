from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CalendarsIDBlockPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1CalendarsIDBlockRequests:
    calendar_block_input_model: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    calendar_block_input_model1: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    calendar_block_input_model2: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    calendar_block_input_model3: Optional[shared.CalendarBlockInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CalendarsIDBlockRequest:
    path_params: PostSetupV1CalendarsIDBlockPathParams = field()
    request: Optional[PostSetupV1CalendarsIDBlockRequests] = field(default=None)
    

@dataclass
class PostSetupV1CalendarsIDBlockResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
