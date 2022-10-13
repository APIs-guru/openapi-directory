from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field(default=None)
    

@dataclass
class GetEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    event_retrieved: Optional[shared.EventRetrieved] = field(default=None)
    
