from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SuppressionInfoReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    RATE_LIMIT = "RATE_LIMIT"
    NOT_CONSUMED = "NOT_CONSUMED"


@dataclass_json
@dataclass
class SuppressionInfo:
    r"""SuppressionInfo
    Information about entries that were omitted from the session.
    """
    
    reason: Optional[SuppressionInfoReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    suppressed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressedCount') }})
    
