from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TimePartitioningTypeEnum(str, Enum):
    PARTITION_TYPE_UNSPECIFIED = "PARTITION_TYPE_UNSPECIFIED"
    HOUR = "HOUR"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class TimePartitioning:
    r"""TimePartitioning
    Configuration for FHIR BigQuery time-partitioned tables.
    """
    
    expiration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationMs') }})
    type: Optional[TimePartitioningTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
