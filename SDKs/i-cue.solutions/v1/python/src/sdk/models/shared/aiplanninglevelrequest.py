from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import planningleveldatadto
from . import planninglevelinforequest

class AiPlanningLevelRequestMethodEnum(str, Enum):
    ICUE_MLP = "icueMLP"
    ICUE_MLO = "icueMLO"


@dataclass_json
@dataclass
class AiPlanningLevelRequest:
    data: Optional[List[planningleveldatadto.PlanningLevelDataDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    method: AiPlanningLevelRequestMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    params: Optional[planninglevelinforequest.PlanningLevelInfoRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    planning_level_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planningLevelId' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
