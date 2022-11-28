from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error:
    r"""Error
    Error describes why the execution was abnormally terminated.
    """
    
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    stack_trace: Optional[StackTrace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTrace') }})
    
