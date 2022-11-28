from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetAddonsConfigRequest:
    r"""SetAddonsConfigRequest
    SetAddonsConfigRequest sets the addons associated with the cluster.
    """
    
    addons_config: Optional[AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonsConfig') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
