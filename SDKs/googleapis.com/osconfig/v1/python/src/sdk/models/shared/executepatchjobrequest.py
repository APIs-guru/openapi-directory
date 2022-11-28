from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutePatchJobRequest:
    r"""ExecutePatchJobRequest
    A request message to initiate patching across Compute Engine instances.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    patch_config: Optional[PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    rollout: Optional[PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    
