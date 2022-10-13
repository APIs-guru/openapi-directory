from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoupgradeoptions


@dataclass_json
@dataclass
class NodeManagement:
    auto_repair: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRepair' }})
    auto_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpgrade' }})
    upgrade_options: Optional[autoupgradeoptions.AutoUpgradeOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeOptions' }})
    
