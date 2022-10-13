from dataclasses import dataclass, field



@dataclass
class GetEventStationsPathParams:
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventStationsRequest:
    path_params: GetEventStationsPathParams = field(default=None)
    

@dataclass
class GetEventStationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
