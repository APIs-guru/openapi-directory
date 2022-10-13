from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import choicequestion
from . import datequestion
from . import fileuploadquestion
from . import grading
from . import rowquestion
from . import scalequestion
from . import textquestion
from . import timequestion


@dataclass_json
@dataclass
class Question:
    choice_question: Optional[choicequestion.ChoiceQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choiceQuestion' }})
    date_question: Optional[datequestion.DateQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateQuestion' }})
    file_upload_question: Optional[fileuploadquestion.FileUploadQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUploadQuestion' }})
    grading: Optional[grading.Grading] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grading' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionId' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    row_question: Optional[rowquestion.RowQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowQuestion' }})
    scale_question: Optional[scalequestion.ScaleQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleQuestion' }})
    text_question: Optional[textquestion.TextQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textQuestion' }})
    time_question: Optional[timequestion.TimeQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeQuestion' }})
    
