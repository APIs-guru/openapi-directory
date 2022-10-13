from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WorkloadMetadataConfigModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    GCE_METADATA = "GCE_METADATA"
    GKE_METADATA = "GKE_METADATA"


@dataclass_json
@dataclass
class WorkloadMetadataConfig:
    mode: Optional[WorkloadMetadataConfigModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
