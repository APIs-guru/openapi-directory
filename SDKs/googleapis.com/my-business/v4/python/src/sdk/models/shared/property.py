from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    built_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtYear' }})
    built_year_exception: Optional[PropertyBuiltYearExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtYearException' }})
    floors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorsCount' }})
    floors_count_exception: Optional[PropertyFloorsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorsCountException' }})
    last_renovated_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRenovatedYear' }})
    last_renovated_year_exception: Optional[PropertyLastRenovatedYearExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRenovatedYearException' }})
    rooms_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomsCount' }})
    rooms_count_exception: Optional[PropertyRoomsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomsCountException' }})
    
