from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEventsPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_id', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    start_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsRequest:
    path_params: GetEventsPathParams = field()
    query_params: GetEventsQueryParams = field()
    

@dataclass
class GetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    get_events_200_application_json_any: Optional[Any] = field(default=None)
    
