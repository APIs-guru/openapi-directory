from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mapvalue


@dataclass_json
@dataclass
class ValueMapValEntry:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[mapvalue.MapValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
