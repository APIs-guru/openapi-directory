from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SwitchRuntimeRequest:
    r"""SwitchRuntimeRequest
    Request for switching a Managed Notebook Runtime.
    """
    
    accelerator_config: Optional[RuntimeAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
