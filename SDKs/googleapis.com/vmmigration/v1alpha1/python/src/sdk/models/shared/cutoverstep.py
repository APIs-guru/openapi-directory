from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import replicationcycle
from . import replicationcycle


@dataclass_json
@dataclass
class CutoverStep:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    final_sync: Optional[replicationcycle.ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalSync' }})
    instantiating_migrated_vm: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instantiatingMigratedVm' }})
    preparing_vm_disks: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparingVmDisks' }})
    previous_replication_cycle: Optional[replicationcycle.ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousReplicationCycle' }})
    shutting_down_source_vm: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shuttingDownSourceVm' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
