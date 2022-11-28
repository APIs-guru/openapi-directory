from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetReference:
    r"""TargetReference
    A lightweight reference to the target of activity.
    """
    
    drive: Optional[DriveReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    drive_item: Optional[DriveItemReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveItem') }})
    team_drive: Optional[TeamDriveReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    
