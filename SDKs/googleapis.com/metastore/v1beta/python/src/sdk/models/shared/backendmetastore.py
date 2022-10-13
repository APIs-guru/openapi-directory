from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BackendMetastoreMetastoreTypeEnum(str, Enum):
    METASTORE_TYPE_UNSPECIFIED = "METASTORE_TYPE_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"


@dataclass_json
@dataclass
class BackendMetastore:
    metastore_type: Optional[BackendMetastoreMetastoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastoreType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
