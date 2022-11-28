from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PredefinedMachineType:
    r"""PredefinedMachineType
    Specification of a predefined machine type.
    """
    
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    
