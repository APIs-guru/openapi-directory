from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CustomBiddingModelDetailsReadinessStateEnum(str, Enum):
    READINESS_STATE_UNSPECIFIED = "READINESS_STATE_UNSPECIFIED"
    READINESS_STATE_ACTIVE = "READINESS_STATE_ACTIVE"
    READINESS_STATE_INSUFFICIENT_DATA = "READINESS_STATE_INSUFFICIENT_DATA"
    READINESS_STATE_TRAINING = "READINESS_STATE_TRAINING"
    READINESS_STATE_NO_VALID_SCRIPT = "READINESS_STATE_NO_VALID_SCRIPT"

class CustomBiddingModelDetailsSuspensionStateEnum(str, Enum):
    SUSPENSION_STATE_UNSPECIFIED = "SUSPENSION_STATE_UNSPECIFIED"
    SUSPENSION_STATE_ENABLED = "SUSPENSION_STATE_ENABLED"
    SUSPENSION_STATE_DORMANT = "SUSPENSION_STATE_DORMANT"
    SUSPENSION_STATE_SUSPENDED = "SUSPENSION_STATE_SUSPENDED"


@dataclass_json
@dataclass
class CustomBiddingModelDetails:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    readiness_state: Optional[CustomBiddingModelDetailsReadinessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readinessState' }})
    suspension_state: Optional[CustomBiddingModelDetailsSuspensionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionState' }})
    
