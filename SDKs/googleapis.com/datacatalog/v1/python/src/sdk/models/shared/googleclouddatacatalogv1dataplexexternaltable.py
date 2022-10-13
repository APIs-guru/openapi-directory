from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum(str, Enum):
    INTEGRATED_SYSTEM_UNSPECIFIED = "INTEGRATED_SYSTEM_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    CLOUD_PUBSUB = "CLOUD_PUBSUB"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"
    DATAPLEX = "DATAPLEX"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexExternalTable:
    data_catalog_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCatalogEntry' }})
    fully_qualified_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyQualifiedName' }})
    google_cloud_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleCloudResource' }})
    system: Optional[GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    
