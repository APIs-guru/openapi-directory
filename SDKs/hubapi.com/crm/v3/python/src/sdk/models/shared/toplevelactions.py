from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopLevelActions:
    secondary: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    primary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    settings: Optional[IFrameActionBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
