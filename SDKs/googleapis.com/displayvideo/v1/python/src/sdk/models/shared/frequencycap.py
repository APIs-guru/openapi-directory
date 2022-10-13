from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FrequencyCapTimeUnitEnum(str, Enum):
    TIME_UNIT_UNSPECIFIED = "TIME_UNIT_UNSPECIFIED"
    TIME_UNIT_LIFETIME = "TIME_UNIT_LIFETIME"
    TIME_UNIT_MONTHS = "TIME_UNIT_MONTHS"
    TIME_UNIT_WEEKS = "TIME_UNIT_WEEKS"
    TIME_UNIT_DAYS = "TIME_UNIT_DAYS"
    TIME_UNIT_HOURS = "TIME_UNIT_HOURS"
    TIME_UNIT_MINUTES = "TIME_UNIT_MINUTES"


@dataclass_json
@dataclass
class FrequencyCap:
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxImpressions' }})
    time_unit: Optional[FrequencyCapTimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnit' }})
    time_unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnitCount' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    
