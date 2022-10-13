from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import specialhourperiod


@dataclass_json
@dataclass
class SpecialHours:
    special_hour_periods: Optional[List[specialhourperiod.SpecialHourPeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialHourPeriods' }})
    
