from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEventsEventIDPathParams:
    event_id: str = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsEventIDRequest:
    path_params: GetEventsEventIDPathParams = field()
    

@dataclass
class GetEventsEventIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
