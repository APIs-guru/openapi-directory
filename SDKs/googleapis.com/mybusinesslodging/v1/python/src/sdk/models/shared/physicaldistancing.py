from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PhysicalDistancingPhysicalDistancingRequiredExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PhysicalDistancingSafetyDividersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class PhysicalDistancing:
    common_areas_physical_distancing_arranged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonAreasPhysicalDistancingArranged' }})
    common_areas_physical_distancing_arranged_exception: Optional[PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonAreasPhysicalDistancingArrangedException' }})
    physical_distancing_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalDistancingRequired' }})
    physical_distancing_required_exception: Optional[PhysicalDistancingPhysicalDistancingRequiredExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalDistancingRequiredException' }})
    safety_dividers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safetyDividers' }})
    safety_dividers_exception: Optional[PhysicalDistancingSafetyDividersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safetyDividersException' }})
    shared_areas_limited_occupancy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAreasLimitedOccupancy' }})
    shared_areas_limited_occupancy_exception: Optional[PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAreasLimitedOccupancyException' }})
    wellness_areas_have_private_spaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wellnessAreasHavePrivateSpaces' }})
    wellness_areas_have_private_spaces_exception: Optional[PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wellnessAreasHavePrivateSpacesException' }})
    
