from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoUpgradeOptions:
    auto_upgrade_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpgradeStartTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
