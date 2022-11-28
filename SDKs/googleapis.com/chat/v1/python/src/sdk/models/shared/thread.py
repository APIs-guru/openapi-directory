from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Thread:
    r"""Thread
    A thread in Google Chat.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    thread_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadKey') }})
    
