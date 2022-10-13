from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetadataExportDatabaseDumpTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"

class MetadataExportStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class MetadataExport:
    database_dump_type: Optional[MetadataExportDatabaseDumpTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseDumpType' }})
    destination_gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationGcsUri' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[MetadataExportStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
