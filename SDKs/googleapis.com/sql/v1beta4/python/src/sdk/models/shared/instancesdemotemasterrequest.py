from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancesDemoteMasterRequest:
    r"""InstancesDemoteMasterRequest
    Database demote primary instance request.
    """
    
    demote_master_context: Optional[DemoteMasterContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demoteMasterContext') }})
    
