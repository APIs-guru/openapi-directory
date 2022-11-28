from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetInstanceMachineTypeRequest:
    r"""SetInstanceMachineTypeRequest
    Request for setting instance machine type.
    """
    
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    
