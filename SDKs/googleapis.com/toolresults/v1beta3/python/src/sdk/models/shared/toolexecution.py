from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ToolExecution:
    r"""ToolExecution
    An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
    """
    
    command_line_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commandLineArguments') }})
    exit_code: Optional[ToolExitCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    tool_logs: Optional[List[FileReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolLogs') }})
    tool_outputs: Optional[List[ToolOutputReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolOutputs') }})
    
