from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaattemptstats
from . import googlecloudintegrationsv1alphaexecutionsnapshot

class GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    RETRY_ON_HOLD = "RETRY_ON_HOLD"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecutionDetails:
    attempt_stats: Optional[List[googlecloudintegrationsv1alphaattemptstats.GoogleCloudIntegrationsV1alphaAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptStats' }})
    execution_snapshots: Optional[List[googlecloudintegrationsv1alphaexecutionsnapshot.GoogleCloudIntegrationsV1alphaExecutionSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSnapshots' }})
    state: Optional[GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
