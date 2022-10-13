from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetentionConfig:
    per_partition_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perPartitionBytes' }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
