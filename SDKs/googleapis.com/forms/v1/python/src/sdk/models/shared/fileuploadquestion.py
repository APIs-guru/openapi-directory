from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileUploadQuestionTypesEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    ANY = "ANY"
    DOCUMENT = "DOCUMENT"
    PRESENTATION = "PRESENTATION"
    SPREADSHEET = "SPREADSHEET"
    DRAWING = "DRAWING"
    PDF = "PDF"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    AUDIO = "AUDIO"


@dataclass_json
@dataclass
class FileUploadQuestion:
    r"""FileUploadQuestion
    A file upload question. The API currently does not support creating file upload questions.
    """
    
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderId') }})
    max_file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFileSize') }})
    max_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFiles') }})
    types: Optional[List[FileUploadQuestionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
