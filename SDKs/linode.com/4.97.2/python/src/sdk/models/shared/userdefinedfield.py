from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserDefinedField:
    r"""UserDefinedField
    A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
    
    """
    
    example: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('example') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    many_of: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manyOf') }})
    one_of: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneOf') }})
    
