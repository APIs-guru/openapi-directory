from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiddenPlayer:
    r"""HiddenPlayer
    The HiddenPlayer resource.
    """
    
    hidden_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenTimeMillis') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player: Optional[Player] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    
