from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum(str, Enum):
    PARTITION_STRUCTURE_UNSPECIFIED = "PARTITION_STRUCTURE_UNSPECIFIED"
    CONSISTENT_KEYS = "CONSISTENT_KEYS"
    HIVE_STYLE_KEYS = "HIVE_STYLE_KEYS"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionInvalidDataPartition:
    expected_structure: Optional[GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedStructure' }})
    
