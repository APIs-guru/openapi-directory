from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import subscription


@dataclass_json
@dataclass
class Subscriptions:
    at_context: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '@context' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEventID' }})
    subscriptions: List[subscription.Subscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
