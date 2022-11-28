from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CourseRosterChangesInfo:
    r"""CourseRosterChangesInfo
    Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
    """
    
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    
