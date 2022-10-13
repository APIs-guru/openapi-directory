from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FolderTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MY_DRIVE_ROOT = "MY_DRIVE_ROOT"
    TEAM_DRIVE_ROOT = "TEAM_DRIVE_ROOT"
    STANDARD_FOLDER = "STANDARD_FOLDER"


@dataclass_json
@dataclass
class Folder:
    type: Optional[FolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
