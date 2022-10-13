from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import answer


@dataclass_json
@dataclass
class FormResponse:
    answers: Optional[dict[str, answer.Answer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    form_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formId' }})
    last_submitted_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSubmittedTime' }})
    respondent_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondentEmail' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    total_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalScore' }})
    
