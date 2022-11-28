from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Change:
    r"""Change
    A change to a file or shared drive.
    """
    
    change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeType') }})
    drive: Optional[Drive] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    file: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    removed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removed') }})
    team_drive: Optional[TeamDrive] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveId') }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
