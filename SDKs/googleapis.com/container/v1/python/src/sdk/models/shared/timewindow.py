from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import maintenanceexclusionoptions


@dataclass_json
@dataclass
class TimeWindow:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    maintenance_exclusion_options: Optional[maintenanceexclusionoptions.MaintenanceExclusionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceExclusionOptions' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
