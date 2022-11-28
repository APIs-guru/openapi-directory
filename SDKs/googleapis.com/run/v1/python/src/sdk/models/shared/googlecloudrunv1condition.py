from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRunV1Condition:
    r"""GoogleCloudRunV1Condition
    Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type \"Ready\" or \"Completed\" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
    """
    
    last_transition_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTransitionTime') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
