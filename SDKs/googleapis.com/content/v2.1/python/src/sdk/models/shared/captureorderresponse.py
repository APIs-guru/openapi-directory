from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CaptureOrderResponseExecutionStatusEnum(str, Enum):
    EXECUTION_STATUS_UNSPECIFIED = "EXECUTION_STATUS_UNSPECIFIED"
    EXECUTED = "EXECUTED"
    DUPLICATE = "DUPLICATE"


@dataclass_json
@dataclass
class CaptureOrderResponse:
    execution_status: Optional[CaptureOrderResponseExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    
