from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LearnerProgressResponse:
    completion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion') }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_logged_in_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoggedInAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personId') }})
    
