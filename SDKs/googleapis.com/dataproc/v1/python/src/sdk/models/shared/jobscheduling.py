from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobScheduling:
    r"""JobScheduling
    Job scheduling options.
    """
    
    max_failures_per_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFailuresPerHour') }})
    max_failures_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFailuresTotal') }})
    
