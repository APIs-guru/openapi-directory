from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EscalationReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    RESOLUTION_TIME = "RESOLUTION_TIME"
    TECHNICAL_EXPERTISE = "TECHNICAL_EXPERTISE"
    BUSINESS_IMPACT = "BUSINESS_IMPACT"


@dataclass_json
@dataclass
class Escalation:
    justification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'justification' }})
    reason: Optional[EscalationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
