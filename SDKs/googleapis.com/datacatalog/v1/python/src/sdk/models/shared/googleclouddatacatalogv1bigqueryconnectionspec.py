from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1cloudsqlbigqueryconnectionspec

class GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum(str, Enum):
    CONNECTION_TYPE_UNSPECIFIED = "CONNECTION_TYPE_UNSPECIFIED"
    CLOUD_SQL = "CLOUD_SQL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryConnectionSpec:
    cloud_sql: Optional[googleclouddatacatalogv1cloudsqlbigqueryconnectionspec.GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSql' }})
    connection_type: Optional[GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCredential' }})
    
