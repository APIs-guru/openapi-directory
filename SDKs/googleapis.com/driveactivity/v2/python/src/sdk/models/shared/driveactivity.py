from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import actor
from . import actiondetail
from . import target
from . import timerange


@dataclass_json
@dataclass
class DriveActivity:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    actors: Optional[List[actor.Actor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actors' }})
    primary_action_detail: Optional[actiondetail.ActionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryActionDetail' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
