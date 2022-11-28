from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancesCloneRequest:
    r"""InstancesCloneRequest
    Database instance clone request.
    """
    
    clone_context: Optional[CloneContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneContext') }})
    
