from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2BadgeConfig:
    r"""GoogleAppsDriveLabelsV2BadgeConfig
    Badge status of the label.
    """
    
    color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    priority_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorityOverride') }})
    
