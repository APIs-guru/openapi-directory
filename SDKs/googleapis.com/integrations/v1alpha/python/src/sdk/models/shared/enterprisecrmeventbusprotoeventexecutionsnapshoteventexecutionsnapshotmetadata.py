from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata:
    event_attempt_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAttemptNum') }})
    task_attempt_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskAttemptNum') }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    
