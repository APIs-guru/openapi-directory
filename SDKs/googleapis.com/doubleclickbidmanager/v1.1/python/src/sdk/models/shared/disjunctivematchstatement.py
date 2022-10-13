from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventfilter


@dataclass_json
@dataclass
class DisjunctiveMatchStatement:
    event_filters: Optional[List[eventfilter.EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFilters' }})
    
