from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import drivefile

class SharedDriveFileShareModeEnum(str, Enum):
    UNKNOWN_SHARE_MODE = "UNKNOWN_SHARE_MODE"
    VIEW = "VIEW"
    EDIT = "EDIT"
    STUDENT_COPY = "STUDENT_COPY"


@dataclass_json
@dataclass
class SharedDriveFile:
    drive_file: Optional[drivefile.DriveFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveFile' }})
    share_mode: Optional[SharedDriveFileShareModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareMode' }})
    
