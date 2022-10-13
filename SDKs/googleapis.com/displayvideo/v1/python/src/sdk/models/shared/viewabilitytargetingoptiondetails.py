from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ViewabilityTargetingOptionDetailsViewabilityEnum(str, Enum):
    VIEWABILITY_UNSPECIFIED = "VIEWABILITY_UNSPECIFIED"
    VIEWABILITY_10_PERCENT_OR_MORE = "VIEWABILITY_10_PERCENT_OR_MORE"
    VIEWABILITY_20_PERCENT_OR_MORE = "VIEWABILITY_20_PERCENT_OR_MORE"
    VIEWABILITY_30_PERCENT_OR_MORE = "VIEWABILITY_30_PERCENT_OR_MORE"
    VIEWABILITY_40_PERCENT_OR_MORE = "VIEWABILITY_40_PERCENT_OR_MORE"
    VIEWABILITY_50_PERCENT_OR_MORE = "VIEWABILITY_50_PERCENT_OR_MORE"
    VIEWABILITY_60_PERCENT_OR_MORE = "VIEWABILITY_60_PERCENT_OR_MORE"
    VIEWABILITY_70_PERCENT_OR_MORE = "VIEWABILITY_70_PERCENT_OR_MORE"
    VIEWABILITY_80_PERCENT_OR_MORE = "VIEWABILITY_80_PERCENT_OR_MORE"
    VIEWABILITY_90_PERCENT_OR_MORE = "VIEWABILITY_90_PERCENT_OR_MORE"


@dataclass_json
@dataclass
class ViewabilityTargetingOptionDetails:
    viewability: Optional[ViewabilityTargetingOptionDetailsViewabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewability' }})
    
