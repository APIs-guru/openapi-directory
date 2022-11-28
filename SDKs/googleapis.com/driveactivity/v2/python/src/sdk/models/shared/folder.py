from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FolderTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MY_DRIVE_ROOT = "MY_DRIVE_ROOT"
    TEAM_DRIVE_ROOT = "TEAM_DRIVE_ROOT"
    STANDARD_FOLDER = "STANDARD_FOLDER"


@dataclass_json
@dataclass
class Folder:
    r"""Folder
    This item is deprecated; please see `DriveFolder` instead.
    """
    
    type: Optional[FolderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
