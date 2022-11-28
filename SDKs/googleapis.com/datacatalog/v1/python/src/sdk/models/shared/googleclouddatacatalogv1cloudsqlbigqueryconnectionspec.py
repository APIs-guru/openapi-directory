from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    POSTGRES = "POSTGRES"
    MYSQL = "MYSQL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec:
    r"""GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec
    Specification for the BigQuery connection to a Cloud SQL instance.
    """
    
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    type: Optional[GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
