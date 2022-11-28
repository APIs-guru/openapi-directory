from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OneTimeSchedule:
    r"""OneTimeSchedule
    Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
    """
    
    execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executeTime') }})
    
