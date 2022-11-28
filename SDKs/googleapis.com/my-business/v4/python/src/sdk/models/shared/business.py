from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BusinessBusinessCenterExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class BusinessMeetingRoomsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class BusinessMeetingRoomsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Business:
    r"""Business
    Features of the property of specific interest to the business traveler.
    """
    
    business_center: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessCenter') }})
    business_center_exception: Optional[BusinessBusinessCenterExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessCenterException') }})
    meeting_rooms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetingRooms') }})
    meeting_rooms_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetingRoomsCount') }})
    meeting_rooms_count_exception: Optional[BusinessMeetingRoomsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetingRoomsCountException') }})
    meeting_rooms_exception: Optional[BusinessMeetingRoomsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetingRoomsException') }})
    
