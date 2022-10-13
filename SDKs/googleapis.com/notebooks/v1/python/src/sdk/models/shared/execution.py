from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executiontemplate

class ExecutionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    PREPARING = "PREPARING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"
    INITIALIZING = "INITIALIZING"


@dataclass_json
@dataclass
class Execution:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    execution_template: Optional[executiontemplate.ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTemplate' }})
    job_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobUri' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_notebook_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputNotebookFile' }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
