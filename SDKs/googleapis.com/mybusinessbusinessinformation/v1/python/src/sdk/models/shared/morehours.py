from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MoreHours:
    r"""MoreHours
    The time periods during which a location is open for certain types of business.
    """
    
    hours_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hoursTypeId') }})
    periods: Optional[List[TimePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    
