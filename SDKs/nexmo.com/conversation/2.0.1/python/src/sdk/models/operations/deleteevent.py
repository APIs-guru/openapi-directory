from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteEventPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    event_id: str = field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEventRequest:
    path_params: DeleteEventPathParams = field()
    

@dataclass
class DeleteEventResponse:
    content_type: str = field()
    status_code: int = field()
    delete_event_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
