from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeperiod


@dataclass_json
@dataclass
class MoreHours:
    hours_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursTypeId' }})
    periods: Optional[List[timeperiod.TimePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periods' }})
    
