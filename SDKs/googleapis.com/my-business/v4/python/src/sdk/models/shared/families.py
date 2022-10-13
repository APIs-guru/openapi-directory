from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FamiliesBabysittingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FamiliesKidsActivitiesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FamiliesKidsClubExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Families:
    babysitting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'babysitting' }})
    babysitting_exception: Optional[FamiliesBabysittingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'babysittingException' }})
    kids_activities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsActivities' }})
    kids_activities_exception: Optional[FamiliesKidsActivitiesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsActivitiesException' }})
    kids_club: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsClub' }})
    kids_club_exception: Optional[FamiliesKidsClubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kidsClubException' }})
    
