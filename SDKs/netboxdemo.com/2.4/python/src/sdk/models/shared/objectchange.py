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
class ObjectChange:
    action: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    changed_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_object') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_data') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: Optional[NestedUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    
