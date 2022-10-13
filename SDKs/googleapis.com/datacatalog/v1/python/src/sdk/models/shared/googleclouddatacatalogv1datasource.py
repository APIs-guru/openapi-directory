from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1storageproperties

class GoogleCloudDatacatalogV1DataSourceServiceEnum(str, Enum):
    SERVICE_UNSPECIFIED = "SERVICE_UNSPECIFIED"
    CLOUD_STORAGE = "CLOUD_STORAGE"
    BIGQUERY = "BIGQUERY"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataSource:
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    service: Optional[GoogleCloudDatacatalogV1DataSourceServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    source_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceEntry' }})
    storage_properties: Optional[googleclouddatacatalogv1storageproperties.GoogleCloudDatacatalogV1StorageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageProperties' }})
    
