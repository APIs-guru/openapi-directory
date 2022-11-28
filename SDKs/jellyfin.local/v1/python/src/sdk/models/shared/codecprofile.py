from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodecProfile:
    apply_conditions: Optional[List[ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyConditions') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    conditions: Optional[List[ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    type: Optional[CodecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
