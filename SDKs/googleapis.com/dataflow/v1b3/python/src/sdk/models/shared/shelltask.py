from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShellTask:
    r"""ShellTask
    A task which consists of a shell command for the worker to execute.
    """
    
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    
