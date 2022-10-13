from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DatabaseDumpDatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"

class DatabaseDumpTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"


@dataclass_json
@dataclass
class DatabaseDump:
    database_type: Optional[DatabaseDumpDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseType' }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    source_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDatabase' }})
    type: Optional[DatabaseDumpTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
