from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Topic:
    r"""Topic
    Topic created by a teacher for the course
    """
    
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    topic_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
