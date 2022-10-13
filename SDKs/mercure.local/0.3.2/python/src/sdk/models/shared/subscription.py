from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subscription:
    at_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@context' }})
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEventID' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    subscriber: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriber' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
