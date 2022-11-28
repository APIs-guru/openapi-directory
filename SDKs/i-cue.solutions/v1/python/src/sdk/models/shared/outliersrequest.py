from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutliersRequest:
    planning_level_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('planningLevelId') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    data: Optional[List[PlanningLevelDataDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
