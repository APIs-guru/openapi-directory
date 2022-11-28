from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceRole:
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    vm_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    

@dataclass_json
@dataclass
class DeviceRoleInput:
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    vm_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    
