from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PartitionSpecPartitionKeyEnum(str, Enum):
    PARTITION_KEY_UNSPECIFIED = "PARTITION_KEY_UNSPECIFIED"
    READ_TIME = "READ_TIME"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class PartitionSpec:
    partition_key: Optional[PartitionSpecPartitionKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    
