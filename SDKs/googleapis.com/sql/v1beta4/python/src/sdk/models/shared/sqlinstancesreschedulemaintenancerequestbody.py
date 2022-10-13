from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reschedule


@dataclass_json
@dataclass
class SQLInstancesRescheduleMaintenanceRequestBody:
    reschedule: Optional[reschedule.Reschedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reschedule' }})
    
