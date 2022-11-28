from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuizSettings:
    r"""QuizSettings
    Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
    """
    
    is_quiz: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isQuiz') }})
    
