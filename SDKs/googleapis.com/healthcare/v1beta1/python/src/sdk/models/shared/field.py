from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Field:
    r"""Field
    A (sub) field of a type.
    """
    
    max_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxOccurs') }})
    min_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minOccurs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
