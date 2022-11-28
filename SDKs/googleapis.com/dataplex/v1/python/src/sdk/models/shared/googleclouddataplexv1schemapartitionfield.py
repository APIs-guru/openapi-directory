from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    BOOLEAN = "BOOLEAN"
    BYTE = "BYTE"
    INT16 = "INT16"
    INT32 = "INT32"
    INT64 = "INT64"
    FLOAT = "FLOAT"
    DOUBLE = "DOUBLE"
    DECIMAL = "DECIMAL"
    STRING = "STRING"
    BINARY = "BINARY"
    TIMESTAMP = "TIMESTAMP"
    DATE = "DATE"
    TIME = "TIME"
    RECORD = "RECORD"
    NULL = "NULL"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1SchemaPartitionField:
    r"""GoogleCloudDataplexV1SchemaPartitionField
    Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
