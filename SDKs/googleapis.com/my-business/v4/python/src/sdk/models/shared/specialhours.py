from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpecialHours:
    r"""SpecialHours
    Represents a set of time periods when a location's operational hours differ from its normal business hours.
    """
    
    special_hour_periods: Optional[List[SpecialHourPeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHourPeriods') }})
    
