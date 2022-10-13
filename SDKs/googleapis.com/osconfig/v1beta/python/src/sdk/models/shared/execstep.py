from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import execstepconfig
from . import execstepconfig


@dataclass_json
@dataclass
class ExecStep:
    linux_exec_step_config: Optional[execstepconfig.ExecStepConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxExecStepConfig' }})
    windows_exec_step_config: Optional[execstepconfig.ExecStepConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsExecStepConfig' }})
    
