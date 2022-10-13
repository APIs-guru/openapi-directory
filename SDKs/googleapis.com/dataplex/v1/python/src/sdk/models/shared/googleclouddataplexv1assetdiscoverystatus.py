from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1assetdiscoverystatusstats

class GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SCHEDULED = "SCHEDULED"
    IN_PROGRESS = "IN_PROGRESS"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetDiscoveryStatus:
    last_run_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunDuration' }})
    last_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunTime' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    state: Optional[GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stats: Optional[googleclouddataplexv1assetdiscoverystatusstats.GoogleCloudDataplexV1AssetDiscoveryStatusStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
