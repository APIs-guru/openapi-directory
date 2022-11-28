from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventChild:
    r"""EventChild
    An event child relationship resource.
    """
    
    child_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
