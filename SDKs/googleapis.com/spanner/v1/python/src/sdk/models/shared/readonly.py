from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReadOnly:
    exact_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactStaleness' }})
    max_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxStaleness' }})
    min_read_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minReadTimestamp' }})
    read_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTimestamp' }})
    return_read_timestamp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnReadTimestamp' }})
    strong: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strong' }})
    
