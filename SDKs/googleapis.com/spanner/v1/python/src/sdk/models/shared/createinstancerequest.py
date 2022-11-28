from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateInstanceRequestInput:
    r"""CreateInstanceRequestInput
    The request for CreateInstance.
    """
    
    instance: Optional[InstanceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    
