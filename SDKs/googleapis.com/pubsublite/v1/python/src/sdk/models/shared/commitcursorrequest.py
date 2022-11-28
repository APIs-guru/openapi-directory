from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitCursorRequest:
    r"""CommitCursorRequest
    Request for CommitCursor.
    """
    
    cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    
