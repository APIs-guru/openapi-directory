from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum(str, Enum):
    PROXIMITY_RADIUS_RANGE_UNSPECIFIED = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED"
    PROXIMITY_RADIUS_RANGE_SMALL = "PROXIMITY_RADIUS_RANGE_SMALL"
    PROXIMITY_RADIUS_RANGE_MEDIUM = "PROXIMITY_RADIUS_RANGE_MEDIUM"
    PROXIMITY_RADIUS_RANGE_LARGE = "PROXIMITY_RADIUS_RANGE_LARGE"


@dataclass_json
@dataclass
class ProximityLocationListAssignedTargetingOptionDetails:
    r"""ProximityLocationListAssignedTargetingOptionDetails
    Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
    """
    
    proximity_location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListId') }})
    proximity_radius_range: Optional[ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusRange') }})
    
