from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum(str, Enum):
    PROXIMITY_RADIUS_UNIT_UNSPECIFIED = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED"
    PROXIMITY_RADIUS_UNIT_MILES = "PROXIMITY_RADIUS_UNIT_MILES"
    PROXIMITY_RADIUS_UNIT_KILOMETERS = "PROXIMITY_RADIUS_UNIT_KILOMETERS"


@dataclass_json
@dataclass
class ProximityLocationListAssignedTargetingOptionDetails:
    proximity_location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityLocationListId' }})
    proximity_radius: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityRadius' }})
    proximity_radius_unit: Optional[ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityRadiusUnit' }})
    
