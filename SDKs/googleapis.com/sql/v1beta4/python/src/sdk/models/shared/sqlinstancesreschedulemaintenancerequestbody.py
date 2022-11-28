from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLInstancesRescheduleMaintenanceRequestBody:
    r"""SQLInstancesRescheduleMaintenanceRequestBody
    Reschedule options for maintenance windows.
    """
    
    reschedule: Optional[Reschedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reschedule') }})
    
