from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypecolor
from . import googletypecolor
from . import googletypecolor


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2BadgeColors:
    background_color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    foreground_color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColor' }})
    solo_color: Optional[googletypecolor.GoogleTypeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soloColor' }})
    
