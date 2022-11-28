from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceSettingsUpdateModel:
    book_ahead_unit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookAheadUnit') }})
    book_ahead_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookAheadValue') }})
    book_in_advance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookInAdvance') }})
    
