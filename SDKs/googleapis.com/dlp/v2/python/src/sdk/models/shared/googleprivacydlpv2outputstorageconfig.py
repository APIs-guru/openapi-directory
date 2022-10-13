from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bigquerytable

class GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum(str, Enum):
    OUTPUT_SCHEMA_UNSPECIFIED = "OUTPUT_SCHEMA_UNSPECIFIED"
    BASIC_COLUMNS = "BASIC_COLUMNS"
    GCS_COLUMNS = "GCS_COLUMNS"
    DATASTORE_COLUMNS = "DATASTORE_COLUMNS"
    BIG_QUERY_COLUMNS = "BIG_QUERY_COLUMNS"
    ALL_COLUMNS = "ALL_COLUMNS"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2OutputStorageConfig:
    output_schema: Optional[GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputSchema' }})
    table: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
