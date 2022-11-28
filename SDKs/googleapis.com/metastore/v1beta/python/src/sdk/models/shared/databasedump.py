from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DatabaseDump
    A specification of the location of and metadata about a database dump from a relational database management system.
    """
    
    database_type: Optional[DatabaseDumpDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUri') }})
    source_database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    type: Optional[DatabaseDumpTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
