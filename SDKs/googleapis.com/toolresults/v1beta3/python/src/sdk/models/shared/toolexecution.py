from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import toolexitcode
from . import filereference
from . import tooloutputreference


@dataclass_json
@dataclass
class ToolExecution:
    command_line_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandLineArguments' }})
    exit_code: Optional[toolexitcode.ToolExitCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    tool_logs: Optional[List[filereference.FileReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolLogs' }})
    tool_outputs: Optional[List[tooloutputreference.ToolOutputReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolOutputs' }})
    
