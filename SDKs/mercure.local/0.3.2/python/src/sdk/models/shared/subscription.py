from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Subscription:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    subscriber: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriber') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    at_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@context') }})
    last_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEventID') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
