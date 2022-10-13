from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LivingAreaLayoutBalconyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaLayoutLivingAreaSqMetersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaLayoutLoftExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaLayoutNonSmokingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaLayoutPatioExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaLayoutStairsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LivingAreaLayout:
    balcony: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balcony' }})
    balcony_exception: Optional[LivingAreaLayoutBalconyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balconyException' }})
    living_area_sq_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livingAreaSqMeters' }})
    living_area_sq_meters_exception: Optional[LivingAreaLayoutLivingAreaSqMetersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livingAreaSqMetersException' }})
    loft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loft' }})
    loft_exception: Optional[LivingAreaLayoutLoftExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loftException' }})
    non_smoking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSmoking' }})
    non_smoking_exception: Optional[LivingAreaLayoutNonSmokingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSmokingException' }})
    patio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patio' }})
    patio_exception: Optional[LivingAreaLayoutPatioExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patioException' }})
    stairs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stairs' }})
    stairs_exception: Optional[LivingAreaLayoutStairsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stairsException' }})
    
