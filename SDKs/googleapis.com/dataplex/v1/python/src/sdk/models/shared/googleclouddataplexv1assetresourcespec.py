from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1AssetResourceSpecTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    STORAGE_BUCKET = "STORAGE_BUCKET"
    BIGQUERY_DATASET = "BIGQUERY_DATASET"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetResourceSpec:
    r"""GoogleCloudDataplexV1AssetResourceSpec
    Identifies the cloud resource that is referenced by this asset.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GoogleCloudDataplexV1AssetResourceSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
