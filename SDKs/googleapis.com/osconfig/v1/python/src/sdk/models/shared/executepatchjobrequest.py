from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import patchinstancefilter
from . import patchconfig
from . import patchrollout


@dataclass_json
@dataclass
class ExecutePatchJobRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    instance_filter: Optional[patchinstancefilter.PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceFilter' }})
    patch_config: Optional[patchconfig.PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchConfig' }})
    rollout: Optional[patchrollout.PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollout' }})
    
