from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import drive
from . import file
from . import teamdrive


@dataclass_json
@dataclass
class Change:
    change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    drive: Optional[drive.Drive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive' }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveId' }})
    file: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    removed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removed' }})
    team_drive: Optional[teamdrive.TeamDrive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrive' }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDriveId' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
