from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum(str, Enum):
    PROXIMITY_RADIUS_RANGE_UNSPECIFIED = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED"
    PROXIMITY_RADIUS_RANGE_SMALL = "PROXIMITY_RADIUS_RANGE_SMALL"
    PROXIMITY_RADIUS_RANGE_MEDIUM = "PROXIMITY_RADIUS_RANGE_MEDIUM"
    PROXIMITY_RADIUS_RANGE_LARGE = "PROXIMITY_RADIUS_RANGE_LARGE"


@dataclass_json
@dataclass
class ProximityLocationListAssignedTargetingOptionDetails:
    proximity_location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityLocationListId' }})
    proximity_radius_range: Optional[ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityRadiusRange' }})
    
