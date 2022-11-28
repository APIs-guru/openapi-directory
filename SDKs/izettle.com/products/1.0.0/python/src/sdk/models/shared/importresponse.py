from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImportResponseStateEnum(str, Enum):
    IMPORTING = "IMPORTING"
    FINISHED_SUCCESS = "FINISHED_SUCCESS"
    FINISHED_FAILED = "FINISHED_FAILED"


@dataclass_json
@dataclass
class ImportResponse:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    state: Optional[ImportResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
