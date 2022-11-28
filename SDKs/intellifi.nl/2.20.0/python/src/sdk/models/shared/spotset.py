from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SpotSet:
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    setid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setid') }})
    spot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spot_id') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_updated') }})
    
