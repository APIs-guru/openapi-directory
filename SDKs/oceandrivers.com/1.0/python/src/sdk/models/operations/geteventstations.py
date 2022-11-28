from dataclasses import dataclass, field



@dataclass
class GetEventStationsPathParams:
    event_id: str = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventStationsRequest:
    path_params: GetEventStationsPathParams = field()
    

@dataclass
class GetEventStationsResponse:
    content_type: str = field()
    status_code: int = field()
    
