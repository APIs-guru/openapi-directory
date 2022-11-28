from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionCursor:
    r"""PartitionCursor
    A pair of a Cursor and the partition it is for.
    """
    
    cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    
