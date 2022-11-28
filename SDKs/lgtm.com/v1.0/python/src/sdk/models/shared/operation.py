from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OperationStatusEnum(str, Enum):
    PENDING = "pending"
    DONE = "done"

class OperationTaskTypeEnum(str, Enum):
    ANALYSIS = "analysis"
    CODEREVIEW = "codereview"
    QUERYJOB = "queryjob"


@dataclass_json
@dataclass
class Operation:
    task_type: OperationTaskTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('task-type') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_result: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task-result') }})
    task_result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task-result-url') }})
    uploads: Optional[dict[str, UploadSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploads') }})
    
