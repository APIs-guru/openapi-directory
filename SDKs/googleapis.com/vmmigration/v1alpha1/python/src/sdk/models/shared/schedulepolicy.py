from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchedulePolicy:
    r"""SchedulePolicy
    A policy for scheduling replications.
    """
    
    idle_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleDuration') }})
    skip_os_adaptation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOsAdaptation') }})
    
