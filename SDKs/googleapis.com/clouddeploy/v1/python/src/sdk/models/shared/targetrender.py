from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TargetRenderFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"

class TargetRenderRenderingStateEnum(str, Enum):
    TARGET_RENDER_STATE_UNSPECIFIED = "TARGET_RENDER_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"


@dataclass_json
@dataclass
class TargetRender:
    failure_cause: Optional[TargetRenderFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    rendering_build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingBuild' }})
    rendering_state: Optional[TargetRenderRenderingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderingState' }})
    
