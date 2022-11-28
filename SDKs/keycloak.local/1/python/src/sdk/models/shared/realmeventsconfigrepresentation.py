from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RealmEventsConfigRepresentation:
    admin_events_details_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEventsDetailsEnabled') }})
    admin_events_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEventsEnabled') }})
    enabled_event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledEventTypes') }})
    events_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventsEnabled') }})
    events_expiration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventsExpiration') }})
    events_listeners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventsListeners') }})
    
