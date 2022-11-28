from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomBiddingModelReadinessStateReadinessStateEnum(str, Enum):
    READINESS_STATE_UNSPECIFIED = "READINESS_STATE_UNSPECIFIED"
    READINESS_STATE_ACTIVE = "READINESS_STATE_ACTIVE"
    READINESS_STATE_INSUFFICIENT_DATA = "READINESS_STATE_INSUFFICIENT_DATA"
    READINESS_STATE_TRAINING = "READINESS_STATE_TRAINING"
    READINESS_STATE_NO_VALID_SCRIPT = "READINESS_STATE_NO_VALID_SCRIPT"


@dataclass_json
@dataclass
class CustomBiddingModelReadinessState:
    r"""CustomBiddingModelReadinessState
    The custom bidding algorithm model readiness state for a single shared advertiser.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    readiness_state: Optional[CustomBiddingModelReadinessStateReadinessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessState') }})
    
