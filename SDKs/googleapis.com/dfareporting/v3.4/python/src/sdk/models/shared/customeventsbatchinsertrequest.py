from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomEventsBatchInsertRequest:
    r"""CustomEventsBatchInsertRequest
    Insert Custom Events Request.
    """
    
    custom_events: Optional[List[CustomEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEvents') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
