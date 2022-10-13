from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuizMarkResponse:
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    last_attempt_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    learner_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerEmail' }})
    learner_fullname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerFullname' }})
    learner_person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerPersonId' }})
    mark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mark' }})
    quiz_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quizId' }})
    quiz_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quizTitle' }})
    
