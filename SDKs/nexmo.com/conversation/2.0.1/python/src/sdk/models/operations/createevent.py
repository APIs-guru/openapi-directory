from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateEventPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateEventRequestBody:
    body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateEventRequest:
    path_params: CreateEventPathParams = field(default=None)
    request: Optional[CreateEventRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateEvent201ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass
class CreateEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_event_201_application_json_object: Optional[CreateEvent201ApplicationJSON] = field(default=None)
    
