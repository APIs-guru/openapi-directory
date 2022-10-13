from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fileuploadanswers
from . import grade
from . import textanswers


@dataclass_json
@dataclass
class Answer:
    file_upload_answers: Optional[fileuploadanswers.FileUploadAnswers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUploadAnswers' }})
    grade: Optional[grade.Grade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grade' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionId' }})
    text_answers: Optional[textanswers.TextAnswers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnswers' }})
    
