from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CaptureOrderResponseExecutionStatusEnum(str, Enum):
    EXECUTION_STATUS_UNSPECIFIED = "EXECUTION_STATUS_UNSPECIFIED"
    EXECUTED = "EXECUTED"
    DUPLICATE = "DUPLICATE"


@dataclass_json
@dataclass
class CaptureOrderResponse:
    r"""CaptureOrderResponse
    Response message for the CaptureOrder method.
    """
    
    execution_status: Optional[CaptureOrderResponseExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStatus') }})
    
