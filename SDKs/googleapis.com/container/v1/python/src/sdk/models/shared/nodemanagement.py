from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeManagement:
    r"""NodeManagement
    NodeManagement defines the set of node management services turned on for the node pool.
    """
    
    auto_repair: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRepair') }})
    auto_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpgrade') }})
    upgrade_options: Optional[AutoUpgradeOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeOptions') }})
    
