from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomEventStatus:
    r"""CustomEventStatus
    The original custom event that was inserted and whether there were any errors.
    """
    
    custom_event: Optional[CustomEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEvent') }})
    errors: Optional[List[CustomEventError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
