from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GooglePrivacyDlpV2OutputStorageConfig
    Cloud repository for storing output.
    """
    
    output_schema: Optional[GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputSchema') }})
    table: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
