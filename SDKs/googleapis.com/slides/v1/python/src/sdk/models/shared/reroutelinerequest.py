from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RerouteLineRequest:
    r"""RerouteLineRequest
    Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
