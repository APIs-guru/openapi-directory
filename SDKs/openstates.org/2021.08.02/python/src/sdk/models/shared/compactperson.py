from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompactPerson:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    current_role: Optional[CurrentRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_role') }})
    
