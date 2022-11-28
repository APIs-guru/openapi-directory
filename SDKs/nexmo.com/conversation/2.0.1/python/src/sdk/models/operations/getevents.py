from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsRequest:
    path_params: GetEventsPathParams = field()
    

@dataclass
class GetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    event_retrieveds: Optional[List[shared.EventRetrieved]] = field(default=None)
    
