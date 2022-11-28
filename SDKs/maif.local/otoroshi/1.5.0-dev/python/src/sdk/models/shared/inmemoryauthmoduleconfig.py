from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InMemoryAuthModuleConfig:
    r"""InMemoryAuthModuleConfig
    Settings to authenticate users using the in memory user store
    """
    
    desc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    session_max_age: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    users: List[InMemoryUser] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
