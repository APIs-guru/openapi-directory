from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betabadgeconfig


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties:
    badge_config: Optional[googleappsdrivelabelsv2betabadgeconfig.GoogleAppsDriveLabelsV2betaBadgeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    insert_before_choice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertBeforeChoice' }})
    
