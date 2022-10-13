from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileuploadanswer


@dataclass_json
@dataclass
class FileUploadAnswers:
    answers: Optional[List[fileuploadanswer.FileUploadAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    
