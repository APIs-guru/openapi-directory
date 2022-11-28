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
class Colors:
    calendar: Optional[dict[str, ColorDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendar') }})
    event: Optional[dict[str, ColorDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
