from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IsInstanceUpgradeableResponse:
    upgrade_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeImage' }})
    upgrade_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeInfo' }})
    upgrade_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeVersion' }})
    upgradeable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeable' }})
    
