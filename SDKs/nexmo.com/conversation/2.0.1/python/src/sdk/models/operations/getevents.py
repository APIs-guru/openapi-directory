from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsRequest:
    path_params: GetEventsPathParams = field(default=None)
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    event_retrieveds: Optional[List[shared.EventRetrieved]] = field(default=None)
    
