from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AiPlanningLevelRequestMethodEnum(str, Enum):
    ICUE_MLP = "icueMLP"
    ICUE_MLO = "icueMLO"


@dataclass_json
@dataclass
class AiPlanningLevelRequest:
    method: AiPlanningLevelRequestMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    planning_level_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('planningLevelId') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    data: Optional[List[PlanningLevelDataDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    params: Optional[PlanningLevelInfoRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
