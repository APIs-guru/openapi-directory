from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FeedFeedTypeEnum(str, Enum):
    FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED"
    DOMAIN_ROSTER_CHANGES = "DOMAIN_ROSTER_CHANGES"
    COURSE_ROSTER_CHANGES = "COURSE_ROSTER_CHANGES"
    COURSE_WORK_CHANGES = "COURSE_WORK_CHANGES"


@dataclass_json
@dataclass
class Feed:
    r"""Feed
    A class of notifications that an application can register to receive. For example: \"all roster changes for a domain\".
    """
    
    course_roster_changes_info: Optional[CourseRosterChangesInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseRosterChangesInfo') }})
    course_work_changes_info: Optional[CourseWorkChangesInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkChangesInfo') }})
    feed_type: Optional[FeedFeedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    
