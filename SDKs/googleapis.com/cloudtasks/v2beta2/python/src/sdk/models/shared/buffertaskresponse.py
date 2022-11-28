from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BufferTaskResponse:
    r"""BufferTaskResponse
    Response message for BufferTask.
    """
    
    task: Optional[Task] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
