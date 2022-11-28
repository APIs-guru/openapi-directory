from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class IncreasedFoodSafetyDisposableFlatwareExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class IncreasedFoodSafetySingleUseFoodMenusExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class IncreasedFoodSafety:
    r"""IncreasedFoodSafety
    Increased food safety measures implemented by the hotel during COVID-19.
    """
    
    dining_areas_additional_sanitation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diningAreasAdditionalSanitation') }})
    dining_areas_additional_sanitation_exception: Optional[IncreasedFoodSafetyDiningAreasAdditionalSanitationExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diningAreasAdditionalSanitationException') }})
    disposable_flatware: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposableFlatware') }})
    disposable_flatware_exception: Optional[IncreasedFoodSafetyDisposableFlatwareExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposableFlatwareException') }})
    food_preparation_and_serving_additional_safety: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foodPreparationAndServingAdditionalSafety') }})
    food_preparation_and_serving_additional_safety_exception: Optional[IncreasedFoodSafetyFoodPreparationAndServingAdditionalSafetyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foodPreparationAndServingAdditionalSafetyException') }})
    individual_packaged_meals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualPackagedMeals') }})
    individual_packaged_meals_exception: Optional[IncreasedFoodSafetyIndividualPackagedMealsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualPackagedMealsException') }})
    single_use_food_menus: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUseFoodMenus') }})
    single_use_food_menus_exception: Optional[IncreasedFoodSafetySingleUseFoodMenusExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUseFoodMenusException') }})
    
