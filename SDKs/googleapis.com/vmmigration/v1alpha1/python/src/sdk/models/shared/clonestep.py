from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloneStep:
    adapting_os: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adaptingOs' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    instantiating_migrated_vm: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instantiatingMigratedVm' }})
    preparing_vm_disks: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparingVmDisks' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
