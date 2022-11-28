from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodePoolAutoConfig:
    r"""NodePoolAutoConfig
    node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
    """
    
    network_tags: Optional[NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    
