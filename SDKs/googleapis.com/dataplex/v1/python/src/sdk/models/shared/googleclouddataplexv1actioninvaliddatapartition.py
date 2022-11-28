from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum(str, Enum):
    PARTITION_STRUCTURE_UNSPECIFIED = "PARTITION_STRUCTURE_UNSPECIFIED"
    CONSISTENT_KEYS = "CONSISTENT_KEYS"
    HIVE_STYLE_KEYS = "HIVE_STYLE_KEYS"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionInvalidDataPartition:
    r"""GoogleCloudDataplexV1ActionInvalidDataPartition
    Action details for invalid or unsupported partitions detected by discovery.
    """
    
    expected_structure: Optional[GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedStructure') }})
    
