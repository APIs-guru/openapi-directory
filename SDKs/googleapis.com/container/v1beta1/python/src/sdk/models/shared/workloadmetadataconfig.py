from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WorkloadMetadataConfigModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    GCE_METADATA = "GCE_METADATA"
    GKE_METADATA = "GKE_METADATA"

class WorkloadMetadataConfigNodeMetadataEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SECURE = "SECURE"
    EXPOSE = "EXPOSE"
    GKE_METADATA_SERVER = "GKE_METADATA_SERVER"


@dataclass_json
@dataclass
class WorkloadMetadataConfig:
    r"""WorkloadMetadataConfig
    WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
    """
    
    mode: Optional[WorkloadMetadataConfigModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    node_metadata: Optional[WorkloadMetadataConfigNodeMetadataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeMetadata') }})
    
