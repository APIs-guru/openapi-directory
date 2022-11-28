from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetagameConfig:
    r"""MetagameConfig
    The metagame config resource
    """
    
    current_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player_levels: Optional[List[PlayerLevel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerLevels') }})
    
