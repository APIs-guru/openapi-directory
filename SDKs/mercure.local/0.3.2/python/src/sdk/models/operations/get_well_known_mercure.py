from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetWellKnownMercureQueryParams:
    topic: List[str] = field(metadata={'query_param': { 'field_name': 'topic', 'style': 'form', 'explode': True }})
    last_event_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Last-Event-ID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWellKnownMercureHeaders:
    last_event_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Last-Event-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureRequest:
    headers: GetWellKnownMercureHeaders = field()
    query_params: GetWellKnownMercureQueryParams = field()
    

@dataclass
class GetWellKnownMercureResponse:
    content_type: str = field()
    status_code: int = field()
    
