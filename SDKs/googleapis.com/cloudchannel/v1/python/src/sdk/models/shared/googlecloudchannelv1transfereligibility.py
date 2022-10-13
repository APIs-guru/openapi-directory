from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    PENDING_TOS_ACCEPTANCE = "PENDING_TOS_ACCEPTANCE"
    SKU_NOT_ELIGIBLE = "SKU_NOT_ELIGIBLE"
    SKU_SUSPENDED = "SKU_SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferEligibility:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ineligibility_reason: Optional[GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ineligibilityReason' }})
    is_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEligible' }})
    
