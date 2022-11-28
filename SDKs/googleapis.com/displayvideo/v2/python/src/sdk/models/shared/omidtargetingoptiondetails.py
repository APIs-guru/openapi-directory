from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OmidTargetingOptionDetailsOmidEnum(str, Enum):
    OMID_UNSPECIFIED = "OMID_UNSPECIFIED"
    OMID_FOR_MOBILE_DISPLAY_ADS = "OMID_FOR_MOBILE_DISPLAY_ADS"


@dataclass_json
@dataclass
class OmidTargetingOptionDetails:
    r"""OmidTargetingOptionDetails
    Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
    """
    
    omid: Optional[OmidTargetingOptionDetailsOmidEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omid') }})
    
