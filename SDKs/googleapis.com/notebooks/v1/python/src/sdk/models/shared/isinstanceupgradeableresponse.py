from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IsInstanceUpgradeableResponse:
    r"""IsInstanceUpgradeableResponse
    Response for checking if a notebook instance is upgradeable.
    """
    
    upgrade_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeImage') }})
    upgrade_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeInfo') }})
    upgrade_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeVersion') }})
    upgradeable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeable') }})
    
