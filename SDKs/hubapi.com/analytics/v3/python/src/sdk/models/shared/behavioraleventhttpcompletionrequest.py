from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BehavioralEventHTTPCompletionRequest:
    event_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    properties: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    occurred_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurredAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utk') }})
    
