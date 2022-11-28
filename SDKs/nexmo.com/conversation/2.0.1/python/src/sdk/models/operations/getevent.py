from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    event_id: str = field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field()
    

@dataclass
class GetEventResponse:
    content_type: str = field()
    status_code: int = field()
    event_retrieved: Optional[shared.EventRetrieved] = field(default=None)
    
