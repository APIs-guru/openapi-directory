from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Post:
    division_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    maximum_memberships: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_memberships') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
