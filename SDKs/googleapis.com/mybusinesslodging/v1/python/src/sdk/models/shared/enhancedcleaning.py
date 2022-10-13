from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class EnhancedCleaning:
    commercial_grade_disinfectant_cleaning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commercialGradeDisinfectantCleaning' }})
    commercial_grade_disinfectant_cleaning_exception: Optional[EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commercialGradeDisinfectantCleaningException' }})
    common_areas_enhanced_cleaning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonAreasEnhancedCleaning' }})
    common_areas_enhanced_cleaning_exception: Optional[EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonAreasEnhancedCleaningException' }})
    employees_trained_cleaning_procedures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesTrainedCleaningProcedures' }})
    employees_trained_cleaning_procedures_exception: Optional[EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesTrainedCleaningProceduresException' }})
    employees_trained_thorough_hand_washing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesTrainedThoroughHandWashing' }})
    employees_trained_thorough_hand_washing_exception: Optional[EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesTrainedThoroughHandWashingException' }})
    employees_wear_protective_equipment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesWearProtectiveEquipment' }})
    employees_wear_protective_equipment_exception: Optional[EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeesWearProtectiveEquipmentException' }})
    guest_rooms_enhanced_cleaning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestRoomsEnhancedCleaning' }})
    guest_rooms_enhanced_cleaning_exception: Optional[EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestRoomsEnhancedCleaningException' }})
    
