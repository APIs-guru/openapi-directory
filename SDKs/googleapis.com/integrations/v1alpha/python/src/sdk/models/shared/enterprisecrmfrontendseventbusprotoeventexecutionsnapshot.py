from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot:
    checkpoint_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkpointTaskNumber') }})
    condition_results: Optional[List[EnterpriseCrmEventbusProtoConditionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionResults') }})
    diff_params: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffParams') }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionInfoId') }})
    event_execution_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionSnapshotId') }})
    event_execution_snapshot_metadata: Optional[EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionSnapshotMetadata') }})
    event_params: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventParams') }})
    snapshot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotTime') }})
    task_execution_details: Optional[List[EnterpriseCrmEventbusProtoTaskExecutionDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecutionDetails') }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    
