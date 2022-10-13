from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partitionid
from . import pathelement


@dataclass_json
@dataclass
class Key:
    partition_id: Optional[partitionid.PartitionID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionId' }})
    path: Optional[List[pathelement.PathElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
