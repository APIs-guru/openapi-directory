from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuestionInput:
    r"""QuestionInput
    Any question. The specific type of question is known by its `kind`.
    """
    
    choice_question: Optional[ChoiceQuestionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choiceQuestion') }})
    date_question: Optional[DateQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateQuestion') }})
    file_upload_question: Optional[FileUploadQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadQuestion') }})
    grading: Optional[Grading] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grading') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    row_question: Optional[RowQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowQuestion') }})
    scale_question: Optional[ScaleQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleQuestion') }})
    text_question: Optional[TextQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textQuestion') }})
    time_question: Optional[TimeQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeQuestion') }})
    

@dataclass_json
@dataclass
class Question:
    r"""Question
    Any question. The specific type of question is known by its `kind`.
    """
    
    choice_question: Optional[ChoiceQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choiceQuestion') }})
    date_question: Optional[DateQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateQuestion') }})
    file_upload_question: Optional[FileUploadQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadQuestion') }})
    grading: Optional[Grading] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grading') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionId') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    row_question: Optional[RowQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowQuestion') }})
    scale_question: Optional[ScaleQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleQuestion') }})
    text_question: Optional[TextQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textQuestion') }})
    time_question: Optional[TimeQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeQuestion') }})
    
