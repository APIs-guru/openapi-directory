from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ToolExecutionStep:
    r"""ToolExecutionStep
    Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
    """
    
    tool_execution: Optional[ToolExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolExecution') }})
    
