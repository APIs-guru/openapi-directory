from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metric
from . import operationprogress

class OperationProgressStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ABORTING = "ABORTING"


@dataclass_json
@dataclass
class OperationProgress:
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stages: Optional[List[operationprogress.OperationProgress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stages' }})
    status: Optional[OperationProgressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
