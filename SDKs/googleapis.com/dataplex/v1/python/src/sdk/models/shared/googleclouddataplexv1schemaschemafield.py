from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1schemaschemafield

class GoogleCloudDataplexV1SchemaSchemaFieldModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    REQUIRED = "REQUIRED"
    NULLABLE = "NULLABLE"
    REPEATED = "REPEATED"

class GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum(str, Enum):
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
class GoogleCloudDataplexV1SchemaSchemaField:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fields: Optional[List[googleclouddataplexv1schemaschemafield.GoogleCloudDataplexV1SchemaSchemaField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    mode: Optional[GoogleCloudDataplexV1SchemaSchemaFieldModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
