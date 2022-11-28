from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PartitionSpecPartitionKeyEnum(str, Enum):
    PARTITION_KEY_UNSPECIFIED = "PARTITION_KEY_UNSPECIFIED"
    READ_TIME = "READ_TIME"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class PartitionSpec:
    r"""PartitionSpec
    Specifications of BigQuery partitioned table as export destination.
    """
    
    partition_key: Optional[PartitionSpecPartitionKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    
