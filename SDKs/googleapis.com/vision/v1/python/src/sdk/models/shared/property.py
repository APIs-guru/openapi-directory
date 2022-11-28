from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Property:
    r"""Property
    A `Property` consists of a user-supplied name/value pair.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uint64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uint64Value') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
