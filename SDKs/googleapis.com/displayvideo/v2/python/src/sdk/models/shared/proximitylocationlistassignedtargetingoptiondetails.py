from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum(str, Enum):
    PROXIMITY_RADIUS_UNIT_UNSPECIFIED = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED"
    PROXIMITY_RADIUS_UNIT_MILES = "PROXIMITY_RADIUS_UNIT_MILES"
    PROXIMITY_RADIUS_UNIT_KILOMETERS = "PROXIMITY_RADIUS_UNIT_KILOMETERS"


@dataclass_json
@dataclass
class ProximityLocationListAssignedTargetingOptionDetails:
    r"""ProximityLocationListAssignedTargetingOptionDetails
    Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
    """
    
    proximity_location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityLocationListId') }})
    proximity_radius: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadius') }})
    proximity_radius_unit: Optional[ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusUnit') }})
    
