from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2badgecolors
from . import googleappsdrivelabelsv2badgecolors


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints:
    badge_colors: Optional[googleappsdrivelabelsv2badgecolors.GoogleAppsDriveLabelsV2BadgeColors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeColors' }})
    badge_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgePriority' }})
    dark_badge_colors: Optional[googleappsdrivelabelsv2badgecolors.GoogleAppsDriveLabelsV2BadgeColors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'darkBadgeColors' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    hidden_in_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenInSearch' }})
    shown_in_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shownInApply' }})
    
