from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1replayconfig
from . import googlecloudpolicysimulatorv1beta1replayresultssummary

class GoogleCloudPolicysimulatorV1beta1ReplayStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1Replay:
    config: Optional[googlecloudpolicysimulatorv1beta1replayconfig.GoogleCloudPolicysimulatorV1beta1ReplayConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    results_summary: Optional[googlecloudpolicysimulatorv1beta1replayresultssummary.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultsSummary' }})
    state: Optional[GoogleCloudPolicysimulatorV1beta1ReplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
