from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventtype


@dataclass_json
@dataclass
class Provider:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    event_types: Optional[List[eventtype.EventType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
