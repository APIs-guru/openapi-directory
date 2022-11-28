from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodePoolDefaults:
    r"""NodePoolDefaults
    Subset of Nodepool message that has defaults.
    """
    
    node_config_defaults: Optional[NodeConfigDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfigDefaults') }})
    
