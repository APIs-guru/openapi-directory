from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWatchRequestInput:
    r"""CreateWatchRequestInput
    Create a new watch.
    """
    
    watch: Optional[WatchInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watch') }})
    watch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchId') }})
    
