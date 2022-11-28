from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityAttemptOpenResponse:
    activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    feedback: Optional[ActivityAttemptOpenResponseFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    learner_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerEmail') }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    response_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseText') }})
    uploaded_files: Optional[ActivityAttemptOpenResponseFiles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadedFiles') }})
    
