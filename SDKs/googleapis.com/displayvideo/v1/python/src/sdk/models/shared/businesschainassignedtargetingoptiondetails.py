from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum(str, Enum):
    DISTANCE_UNIT_UNSPECIFIED = "DISTANCE_UNIT_UNSPECIFIED"
    DISTANCE_UNIT_MILES = "DISTANCE_UNIT_MILES"
    DISTANCE_UNIT_KILOMETERS = "DISTANCE_UNIT_KILOMETERS"


@dataclass_json
@dataclass
class BusinessChainAssignedTargetingOptionDetails:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    proximity_radius_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityRadiusAmount' }})
    proximity_radius_unit: Optional[BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximityRadiusUnit' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
