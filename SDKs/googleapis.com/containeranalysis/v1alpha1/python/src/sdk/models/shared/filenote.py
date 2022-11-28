from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""FileNote
    FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
    """
    
    checksum: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    file_type: Optional[FileNoteFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
