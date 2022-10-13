from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import planningleveldatadto


@dataclass_json
@dataclass
class LifecycleOneToOneRequest:
    data: Optional[planningleveldatadto.PlanningLevelDataDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    planning_level_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planningLevelId' }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    
