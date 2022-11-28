from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BusinessHours:
    r"""BusinessHours
    Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
    """
    
    periods: Optional[List[TimePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    
