from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Answer:
    r"""Answer
    The submitted answer for a question.
    """
    
    file_upload_answers: Optional[FileUploadAnswers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadAnswers') }})
    grade: Optional[Grade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grade') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    text_answers: Optional[TextAnswers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnswers') }})
    
