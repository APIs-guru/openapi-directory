from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifecycleOneToOneRequest:
    planning_level_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('planningLevelId') }})
    data: Optional[PlanningLevelDataDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    
