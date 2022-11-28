from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum(str, Enum):
    CONNECTION_TYPE_UNSPECIFIED = "CONNECTION_TYPE_UNSPECIFIED"
    CLOUD_SQL = "CLOUD_SQL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryConnectionSpec:
    r"""GoogleCloudDatacatalogV1BigQueryConnectionSpec
    Specification for the BigQuery connection.
    """
    
    cloud_sql: Optional[GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSql') }})
    connection_type: Optional[GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCredential') }})
    
