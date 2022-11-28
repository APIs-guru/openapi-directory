from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateOperationRequest:
    r"""CreateOperationRequest
    Request for creating an operation
    """
    
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    
