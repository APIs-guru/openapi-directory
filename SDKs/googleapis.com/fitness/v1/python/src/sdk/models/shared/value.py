from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import valuemapvalentry


@dataclass_json
@dataclass
class Value:
    fp_val: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fpVal' }})
    int_val: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intVal' }})
    map_val: Optional[List[valuemapvalentry.ValueMapValEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapVal' }})
    string_val: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringVal' }})
    
