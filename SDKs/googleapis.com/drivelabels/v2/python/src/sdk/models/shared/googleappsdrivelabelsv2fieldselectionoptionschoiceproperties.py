from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties
    Basic properties of the choice.
    """
    
    badge_config: Optional[GoogleAppsDriveLabelsV2BadgeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    insert_before_choice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertBeforeChoice') }})
    
