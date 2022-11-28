from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateEventPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateEventRequestBody:
    r"""CreateEventRequestBody
    Create New Event Request Payload Object
    """
    
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateEvent201ApplicationJSON:
    r"""CreateEvent201ApplicationJSON
    Create New Event Response Payload Object
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass
class CreateEventRequest:
    path_params: CreateEventPathParams = field()
    request: Optional[CreateEventRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEventResponse:
    content_type: str = field()
    status_code: int = field()
    create_event_201_application_json_object: Optional[CreateEvent201ApplicationJSON] = field(default=None)
    
