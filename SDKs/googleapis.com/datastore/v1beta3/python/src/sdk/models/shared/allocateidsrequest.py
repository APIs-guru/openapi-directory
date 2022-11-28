from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocateIdsRequest:
    r"""AllocateIdsRequest
    The request for Datastore.AllocateIds.
    """
    
    keys: Optional[List[Key]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
