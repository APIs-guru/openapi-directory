from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExportMetadataRequestDatabaseDumpTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    AVRO = "AVRO"


@dataclass_json
@dataclass
class ExportMetadataRequest:
    r"""ExportMetadataRequest
    Request message for DataprocMetastore.ExportMetadata.
    """
    
    database_dump_type: Optional[ExportMetadataRequestDatabaseDumpTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseDumpType') }})
    destination_gcs_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationGcsFolder') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
