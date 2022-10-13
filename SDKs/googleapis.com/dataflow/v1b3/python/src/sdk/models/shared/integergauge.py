from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import splitint64


@dataclass_json
@dataclass
class IntegerGauge:
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    value: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
