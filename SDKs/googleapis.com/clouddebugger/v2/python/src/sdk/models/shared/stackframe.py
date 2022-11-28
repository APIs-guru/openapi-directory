from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackFrame:
    r"""StackFrame
    Represents a stack frame context.
    """
    
    arguments: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    locals: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locals') }})
    location: Optional[SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
