from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import planningleveldatadto


@dataclass_json
@dataclass
class PortfolioRequest:
    data: Optional[List[planningleveldatadto.PlanningLevelDataDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    planning_level_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planningLevelId' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
