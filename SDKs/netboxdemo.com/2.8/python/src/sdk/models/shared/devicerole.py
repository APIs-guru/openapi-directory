from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceRoleInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    vm_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    

@dataclass_json
@dataclass
class DeviceRole:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualmachine_count') }})
    vm_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_role') }})
    
