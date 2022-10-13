from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bluegreeninfo


@dataclass_json
@dataclass
class UpdateInfo:
    blue_green_info: Optional[bluegreeninfo.BlueGreenInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueGreenInfo' }})
    
