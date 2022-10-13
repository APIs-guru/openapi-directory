from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import courserosterchangesinfo
from . import courseworkchangesinfo

class FeedFeedTypeEnum(str, Enum):
    FEED_TYPE_UNSPECIFIED = "FEED_TYPE_UNSPECIFIED"
    DOMAIN_ROSTER_CHANGES = "DOMAIN_ROSTER_CHANGES"
    COURSE_ROSTER_CHANGES = "COURSE_ROSTER_CHANGES"
    COURSE_WORK_CHANGES = "COURSE_WORK_CHANGES"


@dataclass_json
@dataclass
class Feed:
    course_roster_changes_info: Optional[courserosterchangesinfo.CourseRosterChangesInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseRosterChangesInfo' }})
    course_work_changes_info: Optional[courseworkchangesinfo.CourseWorkChangesInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseWorkChangesInfo' }})
    feed_type: Optional[FeedFeedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    
