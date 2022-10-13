from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    POSTGRES = "POSTGRES"
    MYSQL = "MYSQL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    type: Optional[GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
