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
class UpdateContactGroupRequestInput:
    r"""UpdateContactGroupRequestInput
    A request to update an existing user contact group. All updated fields will be replaced.
    """
    
    contact_group: Optional[ContactGroupInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    read_group_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readGroupFields') }})
    update_group_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateGroupFields') }})
    
