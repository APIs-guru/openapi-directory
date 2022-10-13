from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patchjobinstancedetailssummary
from . import patchinstancefilter
from . import patchconfig
from . import patchrollout

class PatchJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTED = "STARTED"
    INSTANCE_LOOKUP = "INSTANCE_LOOKUP"
    PATCHING = "PATCHING"
    SUCCEEDED = "SUCCEEDED"
    COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS"
    CANCELED = "CANCELED"
    TIMED_OUT = "TIMED_OUT"


@dataclass_json
@dataclass
class PatchJob:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    instance_details_summary: Optional[patchjobinstancedetailssummary.PatchJobInstanceDetailsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceDetailsSummary' }})
    instance_filter: Optional[patchinstancefilter.PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceFilter' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    patch_config: Optional[patchconfig.PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchConfig' }})
    patch_deployment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchDeployment' }})
    percent_complete: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentComplete' }})
    rollout: Optional[patchrollout.PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollout' }})
    state: Optional[PatchJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
