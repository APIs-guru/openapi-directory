from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompanionSetting:
    r"""CompanionSetting
    Companion Settings
    """
    
    companions_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionsDisabled') }})
    enabled_sizes: Optional[List[Size]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledSizes') }})
    image_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageOnly') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
