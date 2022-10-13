from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata:
    execution_attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionAttempt' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    task_attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskAttempt' }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    
