from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitteeMembership:
    person_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_name') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    person: Optional[CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
