from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FieldValueChange:
    r"""FieldValueChange
    Change to a Field value.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    new_value: Optional[FieldValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[FieldValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
