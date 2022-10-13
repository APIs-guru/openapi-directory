from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FileNoteFileTypeEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    SOURCE = "SOURCE"
    BINARY = "BINARY"
    ARCHIVE = "ARCHIVE"
    APPLICATION = "APPLICATION"
    AUDIO = "AUDIO"
    IMAGE = "IMAGE"
    TEXT = "TEXT"
    VIDEO = "VIDEO"
    DOCUMENTATION = "DOCUMENTATION"
    SPDX = "SPDX"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class FileNote:
    checksum: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    file_type: Optional[FileNoteFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
