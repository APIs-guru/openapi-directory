from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import replicatingstep


@dataclass_json
@dataclass
class CycleStep:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    initializing_replication: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializingReplication' }})
    post_processing: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postProcessing' }})
    replicating: Optional[replicatingstep.ReplicatingStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicating' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
