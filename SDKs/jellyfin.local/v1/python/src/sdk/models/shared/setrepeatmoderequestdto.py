from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import grouprepeatmode_enum


@dataclass_json
@dataclass
class SetRepeatModeRequestDto:
    mode: Optional[grouprepeatmode_enum.GroupRepeatModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
