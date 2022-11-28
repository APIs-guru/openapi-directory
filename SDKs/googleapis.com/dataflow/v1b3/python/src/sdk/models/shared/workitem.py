from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkItem:
    r"""WorkItem
    WorkItem represents basic information about a WorkItem to be executed in the cloud.
    """
    
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialReportIndex') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    lease_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaseExpireTime') }})
    map_task: Optional[MapTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapTask') }})
    packages: Optional[List[Package]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    report_status_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportStatusInterval') }})
    seq_map_task: Optional[SeqMapTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seqMapTask') }})
    shell_task: Optional[ShellTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shellTask') }})
    source_operation_task: Optional[SourceOperationRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceOperationTask') }})
    streaming_computation_task: Optional[StreamingComputationTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingComputationTask') }})
    streaming_config_task: Optional[StreamingConfigTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingConfigTask') }})
    streaming_setup_task: Optional[StreamingSetupTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingSetupTask') }})
    
