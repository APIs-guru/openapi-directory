from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RackRole:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    rack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack_count') }})
    

@dataclass_json
@dataclass
class RackRoleInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
