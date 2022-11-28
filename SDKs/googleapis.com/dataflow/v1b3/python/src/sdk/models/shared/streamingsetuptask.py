from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamingSetupTask:
    r"""StreamingSetupTask
    A task which initializes part of a streaming Dataflow job.
    """
    
    drain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drain') }})
    receive_work_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiveWorkPort') }})
    snapshot_config: Optional[StreamingApplianceSnapshotConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotConfig') }})
    streaming_computation_topology: Optional[TopologyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingComputationTopology') }})
    worker_harness_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerHarnessPort') }})
    
