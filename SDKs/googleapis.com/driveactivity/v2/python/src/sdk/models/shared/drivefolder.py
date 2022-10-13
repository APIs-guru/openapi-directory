from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DriveFolderTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MY_DRIVE_ROOT = "MY_DRIVE_ROOT"
    SHARED_DRIVE_ROOT = "SHARED_DRIVE_ROOT"
    STANDARD_FOLDER = "STANDARD_FOLDER"


@dataclass_json
@dataclass
class DriveFolder:
    type: Optional[DriveFolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
