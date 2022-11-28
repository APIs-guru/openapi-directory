from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig
    AcceleratorConfig defines the accelerator cards to attach to the VM.
    """
    
    accelerator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorCount') }})
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    
