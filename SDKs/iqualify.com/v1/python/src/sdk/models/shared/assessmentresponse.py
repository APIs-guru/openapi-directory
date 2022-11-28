from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentResponse:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    documents: Optional[List[Document]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMinutes') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mark_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markNumber') }})
    mark_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markType') }})
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAttempts') }})
    open_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    themes: Optional[List[ThemeResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themes') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_questions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQuestions') }})
    total_themes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalThemes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
