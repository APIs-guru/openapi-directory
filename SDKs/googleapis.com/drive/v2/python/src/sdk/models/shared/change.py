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
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    drive: Optional[drive.Drive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive' }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveId' }})
    file: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    modification_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modificationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    team_drive: Optional[teamdrive.TeamDrive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrive' }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDriveId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
