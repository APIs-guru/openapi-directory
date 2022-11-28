from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionView:
    action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    callback_on_modify: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOnModify') }})
    commenced: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commenced'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    keys: Optional[List[KeyView]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
