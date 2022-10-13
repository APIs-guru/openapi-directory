from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderId' }})
    max_file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFileSize' }})
    max_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFiles' }})
    types: Optional[List[FileUploadQuestionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
