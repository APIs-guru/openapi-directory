from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1AssetResourceSpecTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    STORAGE_BUCKET = "STORAGE_BUCKET"
    BIGQUERY_DATASET = "BIGQUERY_DATASET"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetResourceSpec:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[GoogleCloudDataplexV1AssetResourceSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
