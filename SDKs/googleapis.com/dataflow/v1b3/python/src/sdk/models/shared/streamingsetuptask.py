from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamingappliancesnapshotconfig
from . import topologyconfig


@dataclass_json
@dataclass
class StreamingSetupTask:
    drain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drain' }})
    receive_work_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiveWorkPort' }})
    snapshot_config: Optional[streamingappliancesnapshotconfig.StreamingApplianceSnapshotConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotConfig' }})
    streaming_computation_topology: Optional[topologyconfig.TopologyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingComputationTopology' }})
    worker_harness_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerHarnessPort' }})
    
