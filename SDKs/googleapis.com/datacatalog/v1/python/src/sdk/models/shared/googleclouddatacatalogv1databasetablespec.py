from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1dataplextablespec

class GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum(str, Enum):
    TABLE_TYPE_UNSPECIFIED = "TABLE_TYPE_UNSPECIFIED"
    NATIVE = "NATIVE"
    EXTERNAL = "EXTERNAL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DatabaseTableSpec:
    dataplex_table: Optional[googleclouddatacatalogv1dataplextablespec.GoogleCloudDatacatalogV1DataplexTableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataplexTable' }})
    type: Optional[GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
