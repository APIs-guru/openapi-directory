from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileUploadAnswers:
    r"""FileUploadAnswers
    All submitted files for a FileUpload question.
    """
    
    answers: Optional[List[FileUploadAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
