from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecStep:
    r"""ExecStep
    A step that runs an executable for a PatchJob.
    """
    
    linux_exec_step_config: Optional[ExecStepConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxExecStepConfig') }})
    windows_exec_step_config: Optional[ExecStepConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsExecStepConfig') }})
    
