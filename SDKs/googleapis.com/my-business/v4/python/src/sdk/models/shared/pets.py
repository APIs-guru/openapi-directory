from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PetsCatsAllowedExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PetsDogsAllowedExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PetsPetsAllowedExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PetsPetsAllowedFreeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Pets:
    r"""Pets
    Policies regarding guest-owned animals.
    """
    
    cats_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catsAllowed') }})
    cats_allowed_exception: Optional[PetsCatsAllowedExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catsAllowedException') }})
    dogs_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dogsAllowed') }})
    dogs_allowed_exception: Optional[PetsDogsAllowedExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dogsAllowedException') }})
    pets_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petsAllowed') }})
    pets_allowed_exception: Optional[PetsPetsAllowedExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petsAllowedException') }})
    pets_allowed_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petsAllowedFree') }})
    pets_allowed_free_exception: Optional[PetsPetsAllowedFreeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('petsAllowedFreeException') }})
    
