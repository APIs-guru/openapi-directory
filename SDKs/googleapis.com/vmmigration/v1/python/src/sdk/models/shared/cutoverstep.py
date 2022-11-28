from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CutoverStep:
    r"""CutoverStep
    CutoverStep holds information about the cutover step progress.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    final_sync: Optional[ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalSync') }})
    instantiating_migrated_vm: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instantiatingMigratedVm') }})
    preparing_vm_disks: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparingVmDisks') }})
    previous_replication_cycle: Optional[ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousReplicationCycle') }})
    shutting_down_source_vm: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuttingDownSourceVm') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
