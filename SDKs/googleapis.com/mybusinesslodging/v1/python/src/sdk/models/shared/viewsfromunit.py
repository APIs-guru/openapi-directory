from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ViewsFromUnitBeachViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitCityViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitGardenViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitLakeViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitLandmarkViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitOceanViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitPoolViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ViewsFromUnitValleyViewExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class ViewsFromUnit:
    r"""ViewsFromUnit
    Views available from the guest unit itself.
    """
    
    beach_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beachView') }})
    beach_view_exception: Optional[ViewsFromUnitBeachViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beachViewException') }})
    city_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cityView') }})
    city_view_exception: Optional[ViewsFromUnitCityViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cityViewException') }})
    garden_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gardenView') }})
    garden_view_exception: Optional[ViewsFromUnitGardenViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gardenViewException') }})
    lake_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lakeView') }})
    lake_view_exception: Optional[ViewsFromUnitLakeViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lakeViewException') }})
    landmark_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkView') }})
    landmark_view_exception: Optional[ViewsFromUnitLandmarkViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkViewException') }})
    ocean_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oceanView') }})
    ocean_view_exception: Optional[ViewsFromUnitOceanViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oceanViewException') }})
    pool_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolView') }})
    pool_view_exception: Optional[ViewsFromUnitPoolViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolViewException') }})
    valley_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valleyView') }})
    valley_view_exception: Optional[ViewsFromUnitValleyViewExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valleyViewException') }})
    
