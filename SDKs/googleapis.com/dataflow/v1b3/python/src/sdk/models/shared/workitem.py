from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maptask
from . import package
from . import seqmaptask
from . import shelltask
from . import sourceoperationrequest
from . import streamingcomputationtask
from . import streamingconfigtask
from . import streamingsetuptask


@dataclass_json
@dataclass
class WorkItem:
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initial_report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialReportIndex' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    lease_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaseExpireTime' }})
    map_task: Optional[maptask.MapTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapTask' }})
    packages: Optional[List[package.Package]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    report_status_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportStatusInterval' }})
    seq_map_task: Optional[seqmaptask.SeqMapTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seqMapTask' }})
    shell_task: Optional[shelltask.ShellTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shellTask' }})
    source_operation_task: Optional[sourceoperationrequest.SourceOperationRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceOperationTask' }})
    streaming_computation_task: Optional[streamingcomputationtask.StreamingComputationTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingComputationTask' }})
    streaming_config_task: Optional[streamingconfigtask.StreamingConfigTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingConfigTask' }})
    streaming_setup_task: Optional[streamingsetuptask.StreamingSetupTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingSetupTask' }})
    
