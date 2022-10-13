from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PartitionOptions:
    max_partitions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPartitions' }})
    partition_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionSizeBytes' }})
    
