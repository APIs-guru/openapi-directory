from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchJobInstanceDetailsSummary:
    r"""PatchJobInstanceDetailsSummary
    A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
    """
    
    acked_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ackedInstanceCount') }})
    applying_patches_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyingPatchesInstanceCount') }})
    downloading_patches_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadingPatchesInstanceCount') }})
    failed_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedInstanceCount') }})
    inactive_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactiveInstanceCount') }})
    no_agent_detected_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noAgentDetectedInstanceCount') }})
    notified_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifiedInstanceCount') }})
    pending_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingInstanceCount') }})
    post_patch_step_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postPatchStepInstanceCount') }})
    pre_patch_step_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prePatchStepInstanceCount') }})
    rebooting_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebootingInstanceCount') }})
    started_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedInstanceCount') }})
    succeeded_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededInstanceCount') }})
    succeeded_reboot_required_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededRebootRequiredInstanceCount') }})
    timed_out_instance_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timedOutInstanceCount') }})
    
