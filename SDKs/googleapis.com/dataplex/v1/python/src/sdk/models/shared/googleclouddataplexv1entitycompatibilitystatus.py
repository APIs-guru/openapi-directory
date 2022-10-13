from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1entitycompatibilitystatuscompatibility
from . import googleclouddataplexv1entitycompatibilitystatuscompatibility


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EntityCompatibilityStatus:
    bigquery: Optional[googleclouddataplexv1entitycompatibilitystatuscompatibility.GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigquery' }})
    hive_metastore: Optional[googleclouddataplexv1entitycompatibilitystatuscompatibility.GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiveMetastore' }})
    
