from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1entitycompatibilitystatus
from . import googleclouddataplexv1storageformat
from . import googleclouddataplexv1schema

class GoogleCloudDataplexV1EntitySystemEnum(str, Enum):
    STORAGE_SYSTEM_UNSPECIFIED = "STORAGE_SYSTEM_UNSPECIFIED"
    CLOUD_STORAGE = "CLOUD_STORAGE"
    BIGQUERY = "BIGQUERY"

class GoogleCloudDataplexV1EntityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TABLE = "TABLE"
    FILESET = "FILESET"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Entity:
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    catalog_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogEntry' }})
    compatibility: Optional[googleclouddataplexv1entitycompatibilitystatus.GoogleCloudDataplexV1EntityCompatibilityStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibility' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPath' }})
    data_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPathPattern' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    format: Optional[googleclouddataplexv1storageformat.GoogleCloudDataplexV1StorageFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[googleclouddataplexv1schema.GoogleCloudDataplexV1Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    system: Optional[GoogleCloudDataplexV1EntitySystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    type: Optional[GoogleCloudDataplexV1EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
