from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerProfile:
    conditions: Optional[List[ProfileCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    type: Optional[DlnaProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
