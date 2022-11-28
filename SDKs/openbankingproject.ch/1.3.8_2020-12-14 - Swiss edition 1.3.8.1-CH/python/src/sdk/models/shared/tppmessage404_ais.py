from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TppMessage404Ais:
    category: TppMessageCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    code: MessageCode404AisEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
