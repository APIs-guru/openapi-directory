from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import drivereference
from . import driveitemreference
from . import teamdrivereference


@dataclass_json
@dataclass
class TargetReference:
    drive: Optional[drivereference.DriveReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive' }})
    drive_item: Optional[driveitemreference.DriveItemReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveItem' }})
    team_drive: Optional[teamdrivereference.TeamDriveReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrive' }})
    
