from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Label:
    r"""Label
    A key-value pair applied to a given object.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    num_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numValue') }})
    str_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strValue') }})
    
