from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OmidTargetingOptionDetailsOmidEnum(str, Enum):
    OMID_UNSPECIFIED = "OMID_UNSPECIFIED"
    OMID_FOR_MOBILE_DISPLAY_ADS = "OMID_FOR_MOBILE_DISPLAY_ADS"


@dataclass_json
@dataclass
class OmidTargetingOptionDetails:
    omid: Optional[OmidTargetingOptionDetailsOmidEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omid' }})
    
