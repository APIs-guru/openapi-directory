from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2badgeconfig


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties:
    badge_config: Optional[googleappsdrivelabelsv2badgeconfig.GoogleAppsDriveLabelsV2BadgeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    insert_before_choice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertBeforeChoice' }})
    
