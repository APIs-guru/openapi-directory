from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OmidAssignedTargetingOptionDetailsOmidEnum(str, Enum):
    OMID_UNSPECIFIED = "OMID_UNSPECIFIED"
    OMID_FOR_MOBILE_DISPLAY_ADS = "OMID_FOR_MOBILE_DISPLAY_ADS"


@dataclass_json
@dataclass
class OmidAssignedTargetingOptionDetails:
    omid: Optional[OmidAssignedTargetingOptionDetailsOmidEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omid' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
