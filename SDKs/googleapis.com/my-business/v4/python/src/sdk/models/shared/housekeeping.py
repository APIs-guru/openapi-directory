from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HousekeepingDailyHousekeepingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class HousekeepingHousekeepingAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class HousekeepingTurndownServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Housekeeping:
    daily_housekeeping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyHousekeeping' }})
    daily_housekeeping_exception: Optional[HousekeepingDailyHousekeepingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyHousekeepingException' }})
    housekeeping_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'housekeepingAvailable' }})
    housekeeping_available_exception: Optional[HousekeepingHousekeepingAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'housekeepingAvailableException' }})
    turndown_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turndownService' }})
    turndown_service_exception: Optional[HousekeepingTurndownServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turndownServiceException' }})
    
