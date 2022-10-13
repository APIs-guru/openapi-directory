from dataclasses import dataclass, field



@dataclass
class GetEventsEventIDPathParams:
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsEventIDRequest:
    path_params: GetEventsEventIDPathParams = field(default=None)
    

@dataclass
class GetEventsEventIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
