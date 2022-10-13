from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
