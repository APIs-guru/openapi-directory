from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PropertyBuiltYearExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PropertyFloorsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PropertyLastRenovatedYearExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PropertyRoomsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Property:
    r"""Property
    General factual information about the property's physical structure and important dates.
    """
    
    built_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtYear') }})
    built_year_exception: Optional[PropertyBuiltYearExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtYearException') }})
    floors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorsCount') }})
    floors_count_exception: Optional[PropertyFloorsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorsCountException') }})
    last_renovated_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRenovatedYear') }})
    last_renovated_year_exception: Optional[PropertyLastRenovatedYearExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRenovatedYearException') }})
    rooms_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomsCount') }})
    rooms_count_exception: Optional[PropertyRoomsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomsCountException') }})
    
