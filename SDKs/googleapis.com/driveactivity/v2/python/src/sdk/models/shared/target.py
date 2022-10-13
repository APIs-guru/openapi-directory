from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import drive
from . import driveitem
from . import filecomment
from . import teamdrive


@dataclass_json
@dataclass
class Target:
    drive: Optional[drive.Drive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive' }})
    drive_item: Optional[driveitem.DriveItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveItem' }})
    file_comment: Optional[filecomment.FileComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileComment' }})
    team_drive: Optional[teamdrive.TeamDrive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrive' }})
    
