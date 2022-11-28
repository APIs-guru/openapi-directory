from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subactivity:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    qualification_set: Optional[List[Qualification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualification_set') }})
    registries_subactivity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registries_subactivity_code') }})
    
