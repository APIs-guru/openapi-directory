from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1replayconfig
from . import googlecloudpolicysimulatorv1replayresultssummary

class GoogleCloudPolicysimulatorV1ReplayStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1Replay:
    config: Optional[googlecloudpolicysimulatorv1replayconfig.GoogleCloudPolicysimulatorV1ReplayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    results_summary: Optional[googlecloudpolicysimulatorv1replayresultssummary.GoogleCloudPolicysimulatorV1ReplayResultsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultsSummary' }})
    state: Optional[GoogleCloudPolicysimulatorV1ReplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
