from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HotKeyDetection:
    r"""HotKeyDetection
    Proto describing a hot key detected on a given WorkItem.
    """
    
    hot_key_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotKeyAge') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    user_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userStepName') }})
    
