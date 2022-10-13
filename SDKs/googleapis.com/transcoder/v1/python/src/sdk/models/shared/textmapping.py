from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TextMapping:
    atom_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atomKey' }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputKey' }})
    input_track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputTrack' }})
    
