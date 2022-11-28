from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchPersonalFirstLastNameIn:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name1: Optional[FirstLastNameIn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name1') }})
    name2: Optional[PersonalNameIn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name2') }})
    
