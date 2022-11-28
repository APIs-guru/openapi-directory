from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FolderActionResponseStatusEnum(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    CANCELED = "CANCELED"
    COMPLETE = "COMPLETE"


@dataclass_json
@dataclass
class FolderActionResponse:
    completed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: FolderActionResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    errors: Optional[List[StandardError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    num_errors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numErrors') }})
    requested_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result: Optional[Folder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
