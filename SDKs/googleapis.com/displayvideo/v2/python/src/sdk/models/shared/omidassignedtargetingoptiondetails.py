from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OmidAssignedTargetingOptionDetailsOmidEnum(str, Enum):
    OMID_UNSPECIFIED = "OMID_UNSPECIFIED"
    OMID_FOR_MOBILE_DISPLAY_ADS = "OMID_FOR_MOBILE_DISPLAY_ADS"


@dataclass_json
@dataclass
class OmidAssignedTargetingOptionDetails:
    r"""OmidAssignedTargetingOptionDetails
    Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
    """
    
    omid: Optional[OmidAssignedTargetingOptionDetailsOmidEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omid') }})
    
