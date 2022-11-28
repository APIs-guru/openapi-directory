from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OperationProgressStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ABORTING = "ABORTING"


@dataclass_json
@dataclass
class OperationProgress:
    r"""OperationProgress
    Information about operation (or operation stage) progress.
    """
    
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    stages: Optional[List[OperationProgress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    status: Optional[OperationProgressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
