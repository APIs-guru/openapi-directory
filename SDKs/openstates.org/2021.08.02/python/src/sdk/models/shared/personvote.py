from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonVote:
    option: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    voter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voter_name') }})
    voter: Optional[CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voter') }})
    
