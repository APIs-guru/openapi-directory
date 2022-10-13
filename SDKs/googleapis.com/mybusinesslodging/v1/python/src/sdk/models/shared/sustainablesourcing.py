from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SustainableSourcingEcoFriendlyToiletriesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingOrganicCageFreeEggsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingOrganicFoodAndBeveragesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingResponsiblePurchasingPolicyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingResponsiblySourcesSeafoodExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingVeganMealsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainableSourcingVegetarianMealsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class SustainableSourcing:
    eco_friendly_toiletries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecoFriendlyToiletries' }})
    eco_friendly_toiletries_exception: Optional[SustainableSourcingEcoFriendlyToiletriesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecoFriendlyToiletriesException' }})
    locally_sourced_food_and_beverages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locallySourcedFoodAndBeverages' }})
    locally_sourced_food_and_beverages_exception: Optional[SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locallySourcedFoodAndBeveragesException' }})
    organic_cage_free_eggs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organicCageFreeEggs' }})
    organic_cage_free_eggs_exception: Optional[SustainableSourcingOrganicCageFreeEggsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organicCageFreeEggsException' }})
    organic_food_and_beverages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organicFoodAndBeverages' }})
    organic_food_and_beverages_exception: Optional[SustainableSourcingOrganicFoodAndBeveragesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organicFoodAndBeveragesException' }})
    responsible_purchasing_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsiblePurchasingPolicy' }})
    responsible_purchasing_policy_exception: Optional[SustainableSourcingResponsiblePurchasingPolicyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsiblePurchasingPolicyException' }})
    responsibly_sources_seafood: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsiblySourcesSeafood' }})
    responsibly_sources_seafood_exception: Optional[SustainableSourcingResponsiblySourcesSeafoodExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsiblySourcesSeafoodException' }})
    vegan_meals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'veganMeals' }})
    vegan_meals_exception: Optional[SustainableSourcingVeganMealsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'veganMealsException' }})
    vegetarian_meals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vegetarianMeals' }})
    vegetarian_meals_exception: Optional[SustainableSourcingVegetarianMealsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vegetarianMealsException' }})
    
