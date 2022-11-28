from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventCategoryDetail:
    care_context: CareContextDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContext') }})
    hi_types: List[HiTypeEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    
