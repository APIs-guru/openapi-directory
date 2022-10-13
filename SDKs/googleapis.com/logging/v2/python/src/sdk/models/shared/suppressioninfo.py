from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SuppressionInfoReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    RATE_LIMIT = "RATE_LIMIT"
    NOT_CONSUMED = "NOT_CONSUMED"


@dataclass_json
@dataclass
class SuppressionInfo:
    reason: Optional[SuppressionInfoReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    suppressed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressedCount' }})
    
