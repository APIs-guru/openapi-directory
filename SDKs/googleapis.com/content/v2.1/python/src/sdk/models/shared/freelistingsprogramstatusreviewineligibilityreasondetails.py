from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FreeListingsProgramStatusReviewIneligibilityReasonDetails:
    r"""FreeListingsProgramStatusReviewIneligibilityReasonDetails
    Additional details for review ineligibility reasons.
    """
    
    cooldown_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cooldownTime') }})
    
