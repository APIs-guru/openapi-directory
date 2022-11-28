from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SharedDriveFileShareModeEnum(str, Enum):
    UNKNOWN_SHARE_MODE = "UNKNOWN_SHARE_MODE"
    VIEW = "VIEW"
    EDIT = "EDIT"
    STUDENT_COPY = "STUDENT_COPY"


@dataclass_json
@dataclass
class SharedDriveFile:
    r"""SharedDriveFile
    Drive file that is used as material for course work.
    """
    
    drive_file: Optional[DriveFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    share_mode: Optional[SharedDriveFileShareModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareMode') }})
    
