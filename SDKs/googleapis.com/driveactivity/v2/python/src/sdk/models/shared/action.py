from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actor
from . import actiondetail
from . import target
from . import timerange


@dataclass_json
@dataclass
class Action:
    actor: Optional[actor.Actor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    detail: Optional[actiondetail.ActionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    target: Optional[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
