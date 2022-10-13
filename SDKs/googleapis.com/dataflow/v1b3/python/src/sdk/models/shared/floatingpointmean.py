from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import splitint64


@dataclass_json
@dataclass
class FloatingPointMean:
    count: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
