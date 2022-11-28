from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContactGroupRequestInput:
    r"""CreateContactGroupRequestInput
    A request to create a new contact group.
    """
    
    contact_group: Optional[ContactGroupInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    read_group_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readGroupFields') }})
    
