from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Accessibility
    Physical adaptations made to the property in consideration of varying levels of human physical ability.
    """
    
    mobility_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessible') }})
    mobility_accessible_elevator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessibleElevator') }})
    mobility_accessible_elevator_exception: Optional[AccessibilityMobilityAccessibleElevatorExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessibleElevatorException') }})
    mobility_accessible_exception: Optional[AccessibilityMobilityAccessibleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessibleException') }})
    mobility_accessible_parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessibleParking') }})
    mobility_accessible_parking_exception: Optional[AccessibilityMobilityAccessibleParkingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessibleParkingException') }})
    mobility_accessible_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessiblePool') }})
    mobility_accessible_pool_exception: Optional[AccessibilityMobilityAccessiblePoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilityAccessiblePoolException') }})
    
