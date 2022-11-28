from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfileCondition:
    condition: Optional[ProfileConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRequired') }})
    property: Optional[ProfileConditionValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Property') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
