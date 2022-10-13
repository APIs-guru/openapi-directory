from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import groupshufflemode_enum


@dataclass_json
@dataclass
class SetShuffleModeRequestDto:
    mode: Optional[groupshufflemode_enum.GroupShuffleModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
