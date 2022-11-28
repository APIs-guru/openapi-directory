from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DriveFolderTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MY_DRIVE_ROOT = "MY_DRIVE_ROOT"
    SHARED_DRIVE_ROOT = "SHARED_DRIVE_ROOT"
    STANDARD_FOLDER = "STANDARD_FOLDER"


@dataclass_json
@dataclass
class DriveFolder:
    r"""DriveFolder
    A Drive item which is a folder.
    """
    
    type: Optional[DriveFolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
