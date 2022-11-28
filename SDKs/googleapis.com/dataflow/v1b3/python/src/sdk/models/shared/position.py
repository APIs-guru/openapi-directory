from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Position:
    r"""Position
    Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
    """
    
    byte_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteOffset') }})
    concat_position: Optional[ConcatPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concatPosition') }})
    end: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    record_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordIndex') }})
    shuffle_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shufflePosition') }})
    
