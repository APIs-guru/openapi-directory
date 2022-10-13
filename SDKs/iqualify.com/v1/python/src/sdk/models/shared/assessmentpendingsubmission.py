from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import document
from . import themeresponse
from . import user


@dataclass_json
@dataclass
class AssessmentPendingSubmission:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    documents: Optional[List[document.Document]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMinutes' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mark_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markNumber' }})
    mark_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markType' }})
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAttempts' }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    offering_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringName' }})
    open_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pid' }})
    points: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    themes: Optional[List[themeresponse.ThemeResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_questions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalQuestions' }})
    total_themes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalThemes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    users: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
