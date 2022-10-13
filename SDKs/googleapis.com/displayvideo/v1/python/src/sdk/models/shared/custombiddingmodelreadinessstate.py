from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CustomBiddingModelReadinessStateReadinessStateEnum(str, Enum):
    READINESS_STATE_UNSPECIFIED = "READINESS_STATE_UNSPECIFIED"
    READINESS_STATE_ACTIVE = "READINESS_STATE_ACTIVE"
    READINESS_STATE_INSUFFICIENT_DATA = "READINESS_STATE_INSUFFICIENT_DATA"
    READINESS_STATE_TRAINING = "READINESS_STATE_TRAINING"
    READINESS_STATE_NO_VALID_SCRIPT = "READINESS_STATE_NO_VALID_SCRIPT"


@dataclass_json
@dataclass
class CustomBiddingModelReadinessState:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    readiness_state: Optional[CustomBiddingModelReadinessStateReadinessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readinessState' }})
    
