from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import concatposition


@dataclass_json
@dataclass
class Position:
    byte_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteOffset' }})
    concat_position: Optional[concatposition.ConcatPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concatPosition' }})
    end: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    record_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordIndex' }})
    shuffle_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shufflePosition' }})
    
