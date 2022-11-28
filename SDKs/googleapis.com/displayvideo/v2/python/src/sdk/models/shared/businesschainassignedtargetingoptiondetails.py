from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum(str, Enum):
    DISTANCE_UNIT_UNSPECIFIED = "DISTANCE_UNIT_UNSPECIFIED"
    DISTANCE_UNIT_MILES = "DISTANCE_UNIT_MILES"
    DISTANCE_UNIT_KILOMETERS = "DISTANCE_UNIT_KILOMETERS"


@dataclass_json
@dataclass
class BusinessChainAssignedTargetingOptionDetails:
    r"""BusinessChainAssignedTargetingOptionDetails
    Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    proximity_radius_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusAmount') }})
    proximity_radius_unit: Optional[BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusUnit') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class BusinessChainAssignedTargetingOptionDetailsInput:
    r"""BusinessChainAssignedTargetingOptionDetailsInput
    Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
    """
    
    proximity_radius_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusAmount') }})
    proximity_radius_unit: Optional[BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximityRadiusUnit') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
