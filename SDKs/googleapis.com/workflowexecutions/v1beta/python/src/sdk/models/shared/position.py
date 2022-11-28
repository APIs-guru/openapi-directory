from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Position:
    r"""Position
    Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    
