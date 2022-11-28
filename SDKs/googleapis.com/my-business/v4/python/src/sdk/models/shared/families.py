from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Families
    Services and amenities for families and young guests.
    """
    
    babysitting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('babysitting') }})
    babysitting_exception: Optional[FamiliesBabysittingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('babysittingException') }})
    kids_activities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kidsActivities') }})
    kids_activities_exception: Optional[FamiliesKidsActivitiesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kidsActivitiesException') }})
    kids_club: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kidsClub') }})
    kids_club_exception: Optional[FamiliesKidsClubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kidsClubException') }})
    
