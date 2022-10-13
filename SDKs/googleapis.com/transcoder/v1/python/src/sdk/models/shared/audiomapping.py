from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioMapping:
    atom_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atomKey' }})
    gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gainDb' }})
    input_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputChannel' }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputKey' }})
    input_track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputTrack' }})
    output_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputChannel' }})
    
