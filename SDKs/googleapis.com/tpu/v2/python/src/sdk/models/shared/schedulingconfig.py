from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchedulingConfig:
    r"""SchedulingConfig
    Sets the scheduling options for this node.
    """
    
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    reserved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reserved') }})
    
