from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import analysis
from . import code_review
from . import queryjob
from . import upload_session

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
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_result: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task-result' }})
    task_result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task-result-url' }})
    task_type: OperationTaskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task-type' }})
    uploads: Optional[dict[str, upload_session.UploadSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploads' }})
    
