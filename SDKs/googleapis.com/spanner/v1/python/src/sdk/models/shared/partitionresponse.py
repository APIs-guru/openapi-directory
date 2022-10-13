from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partition
from . import transaction


@dataclass_json
@dataclass
class PartitionResponse:
    partitions: Optional[List[partition.Partition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitions' }})
    transaction: Optional[transaction.Transaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
