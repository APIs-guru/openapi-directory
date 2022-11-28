from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBadgeColors:
    r"""GoogleAppsDriveLabelsV2betaBadgeColors
    The color derived from BadgeConfig and changed to the closest recommended supported color.
    """
    
    background_color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    foreground_color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    solo_color: Optional[GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soloColor') }})
    
