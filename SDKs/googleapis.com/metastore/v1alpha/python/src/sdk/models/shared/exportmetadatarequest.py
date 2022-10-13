from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExportMetadataRequestDatabaseDumpTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"


@dataclass_json
@dataclass
class ExportMetadataRequest:
    database_dump_type: Optional[ExportMetadataRequestDatabaseDumpTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseDumpType' }})
    destination_gcs_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationGcsFolder' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
