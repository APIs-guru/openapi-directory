from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatchJobInstanceDetailsSummary:
    acked_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackedInstanceCount' }})
    applying_patches_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyingPatchesInstanceCount' }})
    downloading_patches_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadingPatchesInstanceCount' }})
    failed_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedInstanceCount' }})
    inactive_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactiveInstanceCount' }})
    no_agent_detected_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noAgentDetectedInstanceCount' }})
    notified_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifiedInstanceCount' }})
    pending_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingInstanceCount' }})
    post_patch_step_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postPatchStepInstanceCount' }})
    pre_patch_step_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prePatchStepInstanceCount' }})
    rebooting_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebootingInstanceCount' }})
    started_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedInstanceCount' }})
    succeeded_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededInstanceCount' }})
    succeeded_reboot_required_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededRebootRequiredInstanceCount' }})
    timed_out_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timedOutInstanceCount' }})
    
