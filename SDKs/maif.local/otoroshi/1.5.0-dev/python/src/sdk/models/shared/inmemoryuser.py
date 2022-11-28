from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InMemoryUser:
    r"""InMemoryUser
    A user
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    metadata: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
