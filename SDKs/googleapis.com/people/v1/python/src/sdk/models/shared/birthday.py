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
class BirthdayInput:
    r"""BirthdayInput
    A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
    """
    
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class Birthday:
    r"""Birthday
    A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
    """
    
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
