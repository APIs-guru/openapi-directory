from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CPUTime:
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    total_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMs' }})
    
