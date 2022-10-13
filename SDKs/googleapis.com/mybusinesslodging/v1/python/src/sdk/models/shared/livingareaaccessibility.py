from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LivingAreaAccessibilityAdaCompliantUnitExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LivingAreaAccessibility:
    ada_compliant_unit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adaCompliantUnit' }})
    ada_compliant_unit_exception: Optional[LivingAreaAccessibilityAdaCompliantUnitExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adaCompliantUnitException' }})
    hearing_accessible_doorbell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleDoorbell' }})
    hearing_accessible_doorbell_exception: Optional[LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleDoorbellException' }})
    hearing_accessible_fire_alarm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleFireAlarm' }})
    hearing_accessible_fire_alarm_exception: Optional[LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleFireAlarmException' }})
    hearing_accessible_unit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleUnit' }})
    hearing_accessible_unit_exception: Optional[LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearingAccessibleUnitException' }})
    mobility_accessible_bathtub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleBathtub' }})
    mobility_accessible_bathtub_exception: Optional[LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleBathtubException' }})
    mobility_accessible_shower: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleShower' }})
    mobility_accessible_shower_exception: Optional[LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleShowerException' }})
    mobility_accessible_toilet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleToilet' }})
    mobility_accessible_toilet_exception: Optional[LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleToiletException' }})
    mobility_accessible_unit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleUnit' }})
    mobility_accessible_unit_exception: Optional[LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilityAccessibleUnitException' }})
    
