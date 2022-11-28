from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""FrequencyCap
    Settings that control the number of times a user may be shown with the same ad during a given time period.
    """
    
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    max_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxViews') }})
    time_unit: Optional[FrequencyCapTimeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnit') }})
    time_unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitCount') }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    
