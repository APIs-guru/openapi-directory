from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccessibilityMobilityAccessibleElevatorExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class AccessibilityMobilityAccessibleExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class AccessibilityMobilityAccessibleParkingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class AccessibilityMobilityAccessiblePoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Accessibility:
    mobility_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessible' }})
    mobility_accessible_elevator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleElevator' }})
    mobility_accessible_elevator_exception: Optional[AccessibilityMobilityAccessibleElevatorExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleElevatorException' }})
    mobility_accessible_exception: Optional[AccessibilityMobilityAccessibleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleException' }})
    mobility_accessible_parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleParking' }})
    mobility_accessible_parking_exception: Optional[AccessibilityMobilityAccessibleParkingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleParkingException' }})
    mobility_accessible_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessiblePool' }})
    mobility_accessible_pool_exception: Optional[AccessibilityMobilityAccessiblePoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessiblePoolException' }})
    
