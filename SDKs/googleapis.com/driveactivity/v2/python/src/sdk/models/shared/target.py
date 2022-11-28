from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Target:
    r"""Target
    Information about the target of activity.
    """
    
    drive: Optional[Drive] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    drive_item: Optional[DriveItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveItem') }})
    file_comment: Optional[FileComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileComment') }})
    team_drive: Optional[TeamDrive] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    
