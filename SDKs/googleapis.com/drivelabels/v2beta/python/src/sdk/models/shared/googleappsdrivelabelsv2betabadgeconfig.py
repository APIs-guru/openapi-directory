from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypecolor


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBadgeConfig:
    color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    priority_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorityOverride' }})
    
