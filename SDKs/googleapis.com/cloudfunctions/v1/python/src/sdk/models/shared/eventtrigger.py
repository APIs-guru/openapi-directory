from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failurepolicy


@dataclass_json
@dataclass
class EventTrigger:
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    failure_policy: Optional[failurepolicy.FailurePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failurePolicy' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
