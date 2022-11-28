from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
    UI display hints for rendering an option.
    """
    
    badge_colors: Optional[GoogleAppsDriveLabelsV2BadgeColors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeColors') }})
    badge_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgePriority') }})
    dark_badge_colors: Optional[GoogleAppsDriveLabelsV2BadgeColors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('darkBadgeColors') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    hidden_in_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenInSearch') }})
    shown_in_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shownInApply') }})
    
