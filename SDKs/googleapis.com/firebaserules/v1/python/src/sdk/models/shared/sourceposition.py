from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourcePosition:
    r"""SourcePosition
    Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
    """
    
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    current_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentOffset') }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOffset') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    
