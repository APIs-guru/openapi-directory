from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetWellKnownMercureQueryParams:
    last_event_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Last-Event-ID', 'style': 'form', 'explode': True }})
    topic: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'topic', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWellKnownMercureHeaders:
    last_event_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Last-Event-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureRequest:
    query_params: GetWellKnownMercureQueryParams = field(default=None)
    headers: GetWellKnownMercureHeaders = field(default=None)
    

@dataclass
class GetWellKnownMercureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
