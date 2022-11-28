from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""CustomBiddingModelDetails
    The details of a custom bidding algorithm model for a single shared advertiser.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    readiness_state: Optional[CustomBiddingModelDetailsReadinessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessState') }})
    suspension_state: Optional[CustomBiddingModelDetailsSuspensionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionState') }})
    
