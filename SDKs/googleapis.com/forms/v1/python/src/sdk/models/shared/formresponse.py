from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FormResponse:
    r"""FormResponse
    A form response.
    """
    
    answers: Optional[dict[str, Answer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    form_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formId') }})
    last_submitted_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSubmittedTime') }})
    respondent_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondentEmail') }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseId') }})
    total_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalScore') }})
    
