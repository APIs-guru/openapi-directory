from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ViewabilityAssignedTargetingOptionDetailsViewabilityEnum(str, Enum):
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
class ViewabilityAssignedTargetingOptionDetails:
    r"""ViewabilityAssignedTargetingOptionDetails
    Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
    """
    
    viewability: Optional[ViewabilityAssignedTargetingOptionDetailsViewabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewability') }})
    
